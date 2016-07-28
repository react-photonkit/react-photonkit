import React from 'react';

export default class Options extends React.createClass {
	getDefaultProps() {
		return {
			items: []
		};
	}

	getSelectedIndex() {
		if (this.refs.select) {
			return this.refs.select.selectedIndex;
		}
	}

	render() {
		if (this.props.items.length > 0) {
			const items = this.props.items.map((item, i) => {
				const key = `option-${i}`;
				return (
					<option key={key}>{item}</option>
				);
			});

			return (
				<select className="form-control">
					{items}
				</select>
			);
		}

		return (
			<span/>
		);
	}
}

Options.propTypes = {
	items: React.PropTypes.array
};
