import React from 'react';

export default class ActionBar extends React.Component {
	render() {
		return (
			<div className="toolbar-actions">
				{this.props.children}
			</div>
		);
	}
}

ActionBar.propTypes = {
	children: React.PropTypes.node
};
