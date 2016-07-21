import React from 'react';
import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';

export default class Icon extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		glyph: React.PropTypes.string.isRequired,
		withText: React.PropTypes.bool,
		tab: React.PropTypes.bool
	}

	getDefaultProps() {
		return {
			ptClass: 'icon',
			withText: false,
			tab: false
		};
	}

	render() {
		const classes = this.getPtClassSet();
		classes['icon-#{this.props.glyph}'] = true;
		classes['icon-text'] = this.props.withText;
		classes['icon-close-tab'] = this.props.tab;
		const className = classNames(this.props.className, classes);

		return (
			<span {...this.props} className={className}/>
		);
	}
}
