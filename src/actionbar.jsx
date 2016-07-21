import React from 'react';

export default class ActionBar extends React.Component {
	propTypes = {
		children: React.PropTypes.node
	}

	render() {
		return (
			<div className="toolbar-actions">
				{this.props.children}
			</div>
		);
	}
}
