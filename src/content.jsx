import PropTypes from 'prop-types';
import React from 'react';

export default function Content(props) {
	return <div className="window-content">{props.children}</div>;
}

Content.propTypes = {
	children: PropTypes.node
};
