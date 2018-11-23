import PropTypes from 'prop-types';
import React from 'react';
import * as Photon from './photon.jsx';

export default class Input extends Photon.Component {
	constructor(props) {
		super(props);

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	getValue() {
		return this.node.querySelector('input').value;
	}

	render() {
		return (
			<div className="form-group" ref={this._node}>
				<label>{this.props.label}</label>
				<input {...this.props} className="form-control" placeholder={this.props.placeholder} type={this.props.type}/>
			</div>
		);
	}
}

Input.defaultProps = {
	type: 'text'
};

Input.propTypes = {
	label: PropTypes.string
};
