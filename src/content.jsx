import PropTypes from 'prop-types';
import React from 'react';

export default class Content extends React.Component {
	render() {
		return (
			<div className="window-content">
				{this.props.children}
			</div>
		);
	}
}

Content.propTypes = {
	children: PropTypes.node
};
