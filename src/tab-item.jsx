import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class TabItem extends Photon.createClass {
	getDefaultProps() {
		return {
			ptClass: 'tab-item',
			active: false
		};
	}

	getIconComponent() {
		// <Icon glyph="cancel" tab/>
		// TODO(importre)
		return null;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		classes.active = this.props.active;
		const icon = this.getIconComponent();

		return (
			<a {...this.props} className={className}>
				{icon}{this.props.title}
			</a>
		);
	}
}

TabItem.propTypes = {
	active: React.PropTypes.bool,
	title: React.PropTypes.string.isRequired,
	glyph: React.PropTypes.string
};
