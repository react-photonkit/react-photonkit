import React from 'react';
import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';

export ListGroup class CheckBox extends React.createClass {
	mixins: [PhotonMixin]

	getDefaultProps() {
		return {
			ptClass: 'list-group'
		};
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		return (
			<ul className={className}>
				{this.props.children}
			</ul>
		);
	}
}
