import React from 'react';
import * as Photon from './photon.jsx';

export default class CheckBox extends Photon.createClass {
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

CheckBox.propTypes = {
	label: React.PropTypes.string,
	checked: React.PropTypes.bool
};
