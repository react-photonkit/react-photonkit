import React from 'react';
import classNames from 'classnames';
import Icon from './icon.jsx';
import * as Photon from './photon.jsx';

export default class Button extends Photon.Component {
	getIconComponent() {
		const withText = this.props.text && this.props.text.length > 0;
		if (this.props.glyph) {
			return (
				<Icon glyph={this.props.glyph} withText={withText}/>
			);
		}
	}

	render() {
		const icon = this.getIconComponent();
		const classes = this.getPtClassSet();
		classes.active = this.props.active;
		classes['btn-form'] = this.props.form;
		classes['pull-right'] = this.props.pullRight;
		const className = classNames(this.props.className, classes);

		return (
			<button {...this.props} className={className} onClick={this.props.onClick}>
				{icon}{this.props.text}
			</button>
		);
	}
}

Button.defaultProps = {
	ptClass: 'button',
	ptStyle: 'default',
	active: false,
	pullRight: false
};

Button.propTypes = {
	active: React.PropTypes.bool,
	form: React.PropTypes.bool,
	onClick: React.PropTypes.func
};
