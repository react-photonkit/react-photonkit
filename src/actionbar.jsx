import React from "react";

class ActionBar extends React.Component {
	render() {
		return (
			<div className="toolbar-actions">
				{this.props.children}
			</div>
		);
	}
}

module.exports = ActionBar;
