import PropTypes from 'prop-types';
import React from 'react';

export default class Table extends React.Component {
	constructor(props) {
		super(props);

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	render() {
		return (
			<table className="table-striped" ref={this._node}>
				{this.props.children}
			</table>
		);
	}
}

Table.propTypes = {
	children: PropTypes.node
};
