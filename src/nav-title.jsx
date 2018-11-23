import PropTypes from 'prop-types';
import React from 'react';

export default class NavTitle extends React.Component {
	render() {
		return (
			<h5 className="nav-group-title">
				{this.props.children}
			</h5>
		);
	}
}

NavTitle.propTypes = {
	children: PropTypes.node
};
