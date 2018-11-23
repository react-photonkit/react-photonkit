import PropTypes from 'prop-types';
import React from 'react';

const styleMaps = {
	CLASSES: {
		button: 'btn',
		icon: 'icon',
		toolbar: 'toolbar',
		pane: 'pane',
		'nav-group': 'nav-group',
		'nav-group-item': 'nav-group-item',
		'tab-group': 'tab-group',
		'tab-item': 'tab-item',
		'list-group': 'list-group',
		'list-group-item': 'list-group-item'
	},
	STYLES: [
		'default',
		'primary',
		'positive',
		'negative',
		'warning'
	],
	SIZES: {
		large: 'large',
		mini: 'mini',
		sm: 'sm',
		'one-fourth': 'one-fourth',
		'one-third': 'one-third'
	},
	TYPES: {
		header: 'header',
		footer: 'footer'
	}
};

export class Component extends React.Component {
	getPtClassSet() {
		const classes = {};
		const ptClass = this.props.ptClass && styleMaps.CLASSES[this.props.ptClass];

		if (ptClass) {
			classes[ptClass] = true;
			const prefix = `${ptClass}-`;
			const ptSize = this.props.ptSize && styleMaps.SIZES[this.props.ptSize];

			if (ptSize) {
				classes[prefix + ptSize] = true;
			}

			if (this.props.ptStyle) {
				if (styleMaps.STYLES.indexOf(this.props.ptStyle) >= 0) {
					classes[prefix + this.props.ptStyle] = true;
				} else {
					classes[this.props.ptStyle] = true;
				}
			}

			const ptType = this.props.ptType && styleMaps.TYPES[this.props.ptType];
			if (ptType) {
				classes[prefix + ptType] = true;
			}

			return classes;
		}
	}
}

Component.propTypes = {
	ptClass: PropTypes.string,
	ptStyle: PropTypes.string,
	ptSize: PropTypes.string,
	ptType: PropTypes.string
};
