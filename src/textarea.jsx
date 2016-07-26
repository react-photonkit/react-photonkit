import React from 'react';
import PhotonMixin from './photon-mixin.js';

export default class TableArea extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		placeholder: React.PropTypes.string,
		label: React.PropTypes.string
	}

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
