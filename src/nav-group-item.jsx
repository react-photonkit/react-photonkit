import React from 'react';
import classNames from 'classnames';
import Icon from './icon.jsx';
import * as Photon from './photon.jsx';

export default class NavGroupItem extends Photon.createClass {
	getDefaultProps() {
		return {
			ptClass: 'nav-group-item',
			active: false
		};
	}

	getIconComponent() {
		if (this.props.glyph) {
			return (<Icon glyph={this.props.glyph} withText/>);
		}
	}

	render() {
		const classes = this.getPtClassSet();
		classes.active = this.props.active;
		const className = classNames(this.props.className, classes);
		const icon = this.getIconComponent();

		return (
			<a {...this.props} className={className}>
				{icon}{this.props.text}
			</a>
		);
	}
}

NavGroupItem.propTypes = {
	active: React.PropTypes.bool,
	text: React.PropTypes.string.isRequired,
	glyph: React.PropTypes.string
};
