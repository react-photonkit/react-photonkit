import PropTypes from 'prop-types';
import React from 'react';

export default class Window extends React.Component {
	render() {
		return (
			<div className="window">
				{this.props.children}
			</div>
		);
	}
}

Window.propTypes = {
	children: PropTypes.node
};
