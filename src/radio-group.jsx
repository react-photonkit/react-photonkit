import PropTypes from 'prop-types';
import React from 'react';

export default class RadioGroup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checkedIndex: 0
		};
	}
	onChange(index) {
		return this.setState({
			checkedIndex: index
		});
	}

	getCheckedIndex() {
		return this.state.checkedIndex;
	}

	getChildren() {
		const children = [];
		let index = 0;

		this.props.children.forEach((child, i) => {
			const extra = {
				key: i
			};
			const checked = this.state.checkedIndex === index;
			extra.name = this.props.name;
			extra.checked = checked;
			extra.onChange = this.onChange.bind(this, index++);
			children.push(React.cloneElement(child, extra));
		});

		this.children = children;
		return this.children;
	}

	render() {
		return (
			<div>
				{this.getChildren()}
			</div>
		);
	}
}

RadioGroup.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired
};
