import React from 'react';

export default class Table extends React.createClass {
	render() {
		return (
			<table className="table-striped">
				{this.props.children}
			</table>
		);
	}
}
