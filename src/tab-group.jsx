import React from 'react';
import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';

export default class TabGroup extends React.createClass {
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
			ptClass: 'tab-group',
			draggable: false
		};
	}

	renderTab(child, index) {
		const active = this.state.activeKey === child.props.eventKey;
		React.cloneElement(child, {
			active: active,
			key: `tab-item-${index}`,
			onClick: () => {
				this.setState({
					activeKey: child.props.eventKey
				});
				if (this.props.onSelect) {
					this.props.onSelect(child.props.eventKey);
				}
			}
		});
	}

	renderPane(child) {
		const active = this.state.activeKey === child.props.eventKey;
		try {
			if (active) {
				return child.props.children;
			}
		} catch (err) {
			return null;
		}
	}

	sortableOptions: {
		ref: 'tabs',
		model: 'children',
		disabled: true
	}

	componentWillMount() {
		this.sortableOptions.disabled = !this.props.draggable;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		const renderTab = (child, index) => this.renderTab(child, index);
		const renderPane = (child, index) => this.renderPane(child, index);

		let childTabs;
		let childPane;

		if (this.state.children) {
			childPane = this.state.children.map(renderTab);
		}

		if (this.state.children) {
			childPane = this.state.children.map(renderPane);
		}

		return (
			<div>
				<div className={className}>
					{childTabs}
				</div>
				<div>
					{childPane}
				</div>
			</div>
		);
	}
}
