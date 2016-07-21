import React from 'react';
// import classNames from 'classnames';
import PhotonMixin from './photon-mixin.js';

export default class Input extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		label: React.PropTypes.string
	}

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
