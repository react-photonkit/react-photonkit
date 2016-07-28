import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class NavGroup extends Photon.createClass {
	getInitialState() {
		return {
			activeKey: this.props.activeKey,
			children: this.props.children
		};
	}

	getDefaultProps() {
		return {
			ptClass: 'nav-group',
			draggable: false
		};
	}

	renderNav(child, index) {
		const active = this.state.activeKey === child.props.eventKey;
		React.cloneElement({
			child,
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

	sortableOptions: {
		ref: 'navs',
		model: 'children',
		disabled: true
	}

	componentWillMount() {
		this.sortableOptions.disabled = !this.props.draggable;
		return this.sortableOptions.disabled;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		let renderNav;
		let childNavs;

		renderNav = (child, index) => {
			this.renderNav(child, index);
		};

		if (this.state.children) {
			childNavs = this.state.children.map(renderNav);
		}

		return (
			<nav className={className}>
				{childNavs}
			</nav>
		);
	}
}

NavGroup.propTypes = {
	activeKey: React.PropTypes.any,
	onSelect: React.PropTypes.func,
	draggable: React.PropTypes.bool
};
