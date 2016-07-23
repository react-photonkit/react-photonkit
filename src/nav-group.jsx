import React from 'react';
import classNames from 'classnames';
import SortableMixin from 'react-sortable-mixin';
import PhotonMixin from './photon-mixin.js';

export NavGroup class CheckBox extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		activeKey: React.PropTypes.any,
		onSelect: React.PropTypes.func,
		draggable: React.PropTypes.bool
	}

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
		const active = this.state.activeKey == child.props.eventKey;
		React.cloneElement({
			child,
			active: active,
			key: `nav-group-item-${index}`
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
		return this.sortableOptions.disabled = !this.props.draggable;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		let childNavs;

		renderNav = (child, index) => {
			this.renderNav(child, index);

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
}
