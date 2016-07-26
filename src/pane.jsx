import React from 'react';
import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';

export default class Pane extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		sidebar: React.PropTypes.bool
	}

	getDefaultProps() {
		return {
			ptClass: 'pane',
			sidebar: false
		};
	}

	render() {
		const classes = this.getPtClassSet();
		classes.sidebar = this.props.sidebar;
		const className = classNames(this.props.className, classes);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}
