import React from 'react';
import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';
import Icon from './icon.jsx';

export ListGroup class CheckBox extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		active: React.PropTypes.bool,
		text: React.PropTypes.string.isRequired,
		glyph: React.PropTypes.string
	}

	getDefaultProps() {
		return {
			ptClass: 'nav-group-item',
			active: false
		};
	}

	getIconComponent() {
		return (
			if (this.props.glyph) {
				return (<Icon glyph={this.props.glyph} withText/>);
			}
		);
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
