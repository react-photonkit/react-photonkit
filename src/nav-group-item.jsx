import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from './icon.jsx';
import * as Photon from './photon.jsx';

export default class NavGroupItem extends Photon.Component {
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

		delete props.eventKey;
		delete props.ptClass;
		delete props.glyph;
		delete props.withText;
		delete props.active;
		delete props.text;

		return (
			<a {...props} className={className}>
				{icon}{this.props.text}
			</a>
		);
	}
}

NavGroupItem.defaultProps = {
	ptClass: 'nav-group-item',
	active: false
};

NavGroupItem.propTypes = {
	active: PropTypes.bool,
	text: PropTypes.string.isRequired,
	glyph: PropTypes.string
};
