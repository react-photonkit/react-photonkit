import PropTypes from 'prop-types';
import React from 'react';

export default function Window(props) {
	return <div className="window">{props.children}</div>;
}

Window.propTypes = {
	children: PropTypes.node
};
