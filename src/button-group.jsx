import PropTypes from 'prop-types';
import React from 'react';

export default function ButtonGroup(props) {
	return <div className="btn-group">{props.children}</div>;
}

ButtonGroup.propTypes = {
	children: PropTypes.node
};
