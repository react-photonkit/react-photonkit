import React from 'react';

export default class NavTitle extends React.createClass {
	render() {
		return (
			<h5 className="nav-group-title">
				{this.props.children}
			</h5>
		);
	}
}
