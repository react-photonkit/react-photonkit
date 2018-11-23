import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from './icon.jsx';
import * as Photon from './photon.jsx';

export default class TabItem extends Photon.Component {
	getIconComponent() {
		if (this.props.glyph) {
			return (<Icon glyph={this.props.glyph} withText/>);
		}
	}

	render() {
		const props = Object.assign({}, this.props);
		const classes = this.getPtClassSet();
		classes.active = props.active;
		const className = classNames(props.className, classes);
		const icon = this.getIconComponent();

		delete props.ptClass;
		delete props.active;
		delete props.eventKey;

		return (
			<a {...props} className={className}>
				{icon}{this.props.title}
			</a>
		);
	}
}

TabItem.defaultProps = {
	ptClass: 'tab-item',
	active: false
};

TabItem.propTypes = {
	active: PropTypes.bool,
	title: PropTypes.string.isRequired,
	glyph: PropTypes.string
};
