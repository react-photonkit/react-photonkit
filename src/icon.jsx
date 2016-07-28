import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class Icon extends Photon.Component {
	render() {
		const classes = this.getPtClassSet();
		classes[`icon-${this.props.glyph}`] = true;
		classes['icon-text'] = this.props.withText;
		classes['icon-close-tab'] = this.props.tab;
		const className = classNames(this.props.className, classes);

		return (
			<span {...this.props} className={className}/>
		);
	}
}

Icon.defaultProps = {
	ptClass: 'icon',
	withText: false,
	tab: false
};

Icon.propTypes = {
	glyph: React.PropTypes.string.isRequired,
	withText: React.PropTypes.bool,
	tab: React.PropTypes.bool
};
