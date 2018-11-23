import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class Pane extends Photon.Component {
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

Pane.propTypes = {
	sidebar: PropTypes.bool
};

Pane.defaultProps = {
	ptClass: 'pane',
	sidebar: false
};
