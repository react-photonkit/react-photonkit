import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class ListGroup extends Photon.Component {
	constructor(props) {
		super(props);

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		return (
			<ul className={className} ref={this._node}>
				{this.props.children}
			</ul>
		);
	}
}

ListGroup.defaultProps = {
	ptClass: 'list-group'
};
