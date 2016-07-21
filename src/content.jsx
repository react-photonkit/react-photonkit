import React from 'react';

export default class Content extends React.createClass {
	render() {
		return (
			<div className="window-content">
				{this.props.children}
			</div>
		);
	}
}
