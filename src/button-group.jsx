import React from 'react';

export default class ButtonGroup extends React.createClass {
	render() {
		return (
			<div className="btn-group">
				{this.props.children}
			</div>
		);
	}
}
