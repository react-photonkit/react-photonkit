import React from 'react';

export default class TableArea extends React.Component {
	constructor(props) {
		super(props);

		this.refTextArea = this.refTextArea.bind(this);
	}
	getValue() {
		return this.textArea.value;
	}

	refTextArea(ta) {
		this.textArea = ta;
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<textarea {...this.props} className="form-control" placeholder={this.props.placeholder} ref={this.refTextArea}>
					{this.props.children}
				</textarea>
			</div>
		);
	}
}

TableArea.propTypes = {
	children: React.PropTypes.node,
	placeholder: React.PropTypes.string,
	label: React.PropTypes.string
};
