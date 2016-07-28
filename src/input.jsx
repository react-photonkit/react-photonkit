import React from 'react';
import * as Photon from './photon.jsx';

export default class Input extends Photon.createClass {
	getValue() {
		return this.refs.text.value;
	}

	getDefaultProps() {
		return {
			type: 'text'
		};
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<input {...this.props} className="form-control" placeholder={this.props.placeholder} type={this.props.type}/>
			</div>
		);
	}
}

Input.propTypes = {
	label: React.PropTypes.string
};
