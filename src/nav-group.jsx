import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class NavGroup extends Photon.Component {
	constructor(props) {
		super(props);

		this.sortableOptions = {
			ref: 'navs',
			model: 'children',
			disabled: true
		};

		this.state = {
			activeKey: props.activeKey,
			children: props.children
		};

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	renderNav(child, index) {
		const active = this.state.activeKey === child.props.eventKey;
		return React.cloneElement(child, {
			active: active,
			key: `nav-group-item-${index}`,
			onClick: () => {
				this.setState({
					activeKey: child.props.eventKey
				});

				if (this.props.onSelect) {
					return this.props.onSelect(child.props.eventKey);
				}
			}
		});
	}

	componentWillMount() {
		this.sortableOptions.disabled = !this.props.draggable;
		return this.sortableOptions.disabled;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		const childrens = this.state.children;
		const childNavs = React.Children.map(childrens,
			(childrens, index) => this.renderNav(childrens, index));

		return (
			<nav className={className} ref={this._node}>
				{childNavs}
			</nav>
		);
	}
}

NavGroup.defaultProps = {
	activeKey: '',
	ptClass: 'nav-group',
	draggable: false
};

NavGroup.propTypes = {
	activeKey: React.PropTypes.any,
	onSelect: React.PropTypes.func,
	draggable: React.PropTypes.bool
};
