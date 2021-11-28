import PropTypes from 'prop-types';
import React from 'react';

export default function NavTitle(props) {
	return <h5 className="nav-group-title">{props.children}</h5>;
}

NavTitle.propTypes = {
	children: PropTypes.node
};
