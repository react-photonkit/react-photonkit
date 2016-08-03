import React from 'react';

export default class Table extends React.Component {
	render() {
		return (
			<table className="table-striped">
				{this.props.children}
			</table>
		);
	}
}
