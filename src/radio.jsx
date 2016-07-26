import React from 'react';
import PhotonMixin from './photon-mixin.js';

export default class Radio extends React.createClass {
	mixins: [PhotonMixin]

	propTypes: {
		label: React.PropTypes.string
	}

	handleChangeRadio(event) {
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}

	render() {
		return (
			<div className="radio">
				<label>
					<input {...this.props} type="radio" onChange={this.handleChangeRadio}/>
					{this.props.label}
				</label>
			</div>
		);
	}
}
