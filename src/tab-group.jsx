import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';
import Sortable from 'sortablejs';

export default class TabGroup extends Photon.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeKey: props.activeKey,
			children: props.children
		};

		// ref function to avoid creating multiple instancein the path of render
		this._node = this._node.bind(this);
	}

	_node(n) {
		if (n) {
			this.node = n;
			this.sortable = Sortable.create(this.node.querySelector('.tab-group'), {
				handle: '.tab-group',
				disabled: !this.props.draggable
			});
		}
	}

	renderTab(child, index) {
		const active = this.state.activeKey === child.props.eventKey;
		return React.cloneElement(child, {
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
		if (active) {
			return child.props.children;
		}

		return null;
	}

	componentWillUnmount() {
		if (this.sortable) {
			this.sortable.destory();
			this.sortable = null;
		}
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		let childTabs;
		let childPane;

		if (this.state.children) {
			childTabs = this.state.children.map((child, index) => {
				return this.renderTab(child, index);
			});

			childPane = this.state.children.map((child, index) => {
				return this.renderPane(child, index);
			});
		}

		return (
			<div ref={this._node}>
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

TabGroup.defaultProps = {
	activeKey: '',
	ptClass: 'tab-group',
	draggable: false
};

TabGroup.propTypes = {
	activeKey: PropTypes.any,
	onSelect: PropTypes.func,
	draggable: PropTypes.bool
};
