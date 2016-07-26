import React from 'react';

export default class Window extends React.createClass {
	render() {
		return (
			<div className="window">
				{this.props.children}
			</div>
		);
	}
}
