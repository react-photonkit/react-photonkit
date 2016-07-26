import React from 'react';

export default class PaneGroup extends React.createClass {
	render() {
		return (
			<div className="pane-group">
				{this.props.children}
			</div>
		);
	}
}
