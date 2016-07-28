import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class ListGroup extends Photon.Component {
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
