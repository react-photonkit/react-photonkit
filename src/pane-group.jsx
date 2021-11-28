import PropTypes from 'prop-types';
import React from 'react';

export default function PaneGroup(props) {
	return <div className="pane-group">{props.children}</div>;
}

PaneGroup.propTypes = {
	children: PropTypes.node
};
