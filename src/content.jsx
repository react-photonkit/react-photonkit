import React from 'react';

export default class Content extends React.Component {
	render() {
		return (
			<div className="window-content">
				{this.props.children}
			</div>
		);
	}
}

Content.propTypes = {
	children: React.PropTypes.node
};
