import React from 'react';

export default class TableArea extends React.Component {
	getValue() {
		return this.textArea.value;
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<textarea {...this.props}
					className="form-control"
					placeholder={this.props.placeholder}
					ref={c => this.textArea = c}
				>
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
