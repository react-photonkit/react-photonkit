import React from 'react';
import PhotonMixin from './photon-mixin.js';

export default class CheckBox extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		label: React.PropTypes.string,
		checked: React.PropTypes.bool
	}

	getInitialState() {
		return {
			checked: this.props.checked
		};
	}

	isChecked() {
		return this.refs.checkbox.checked;
	}

	render() {
		return (
			<div className="checkbox">
				<label>
					<input {...this.props} type="checkbox"/>
					{this.props.label}
				</label>
			</div>
		);
	}
}
