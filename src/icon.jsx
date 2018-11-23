import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class Icon extends Photon.Component {
	render() {
		const props = Object.assign({}, this.props);
		const classes = this.getPtClassSet();
		classes[`icon-${props.glyph}`] = true;
		classes['icon-text'] = props.withText;
		classes['icon-close-tab'] = props.tab;
		const className = classNames(props.className, classes);

		delete props.ptClass;
		delete props.glyph;
		delete props.withText;
		delete props.tab;

		return (
			<span {...props} className={className}/>
		);
	}
}

Icon.defaultProps = {
	ptClass: 'icon',
	withText: false,
	tab: false
};

Icon.propTypes = {
	glyph: PropTypes.string.isRequired,
	withText: PropTypes.bool,
	tab: PropTypes.bool
};
