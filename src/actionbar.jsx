import PropTypes from 'prop-types';
import React from 'react';

export default function ActionBar(props) {
	return <div className="toolbar-actions">{props.children}</div>;
}

ActionBar.propTypes = {
	children: PropTypes.node
};
