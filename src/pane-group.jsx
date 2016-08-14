import React from 'react';

export default class PaneGroup extends React.Component {
	render() {
		return (
			<div className="pane-group">
				{this.props.children}
			</div>
		);
	}
}

PaneGroup.propTypes = {
	children: React.PropTypes.node
};
