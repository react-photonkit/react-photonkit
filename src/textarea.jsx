import React from 'react';
import * as Photon from './photon.jsx';

export default class TableArea extends Photon.createClass {
	getValue() {
		return this.refs.text.value;
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<textarea {...this.props} className="form-control" placeholder={this.props.placeholder}>
					{this.props.children}
				</textarea>
			</div>
		);
	}
}

TableArea.propTypes = {
	placeholder: React.PropTypes.string,
	label: React.PropTypes.string
};
