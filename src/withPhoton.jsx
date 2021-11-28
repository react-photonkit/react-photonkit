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

export default function withPhoton(WrappedComponent) {
  return function(props) {
    function getPtClassSet() {
      const classes = {};
      const ptClass = props.ptClass && styleMaps.CLASSES[props.ptClass];
  
      if (ptClass) {
        classes[ptClass] = true;
        const prefix = `${ptClass}-`;
        const ptSize = props.ptSize && styleMaps.SIZES[props.ptSize];
  
        if (ptSize) {
          classes[prefix + ptSize] = true;
        }
  
        if (props.ptStyle) {
          if (styleMaps.STYLES.indexOf(props.ptStyle) >= 0) {
            classes[prefix + props.ptStyle] = true;
          } else {
            classes[props.ptStyle] = true;
          }
        }
  
        const ptType = props.ptType && styleMaps.TYPES[props.ptType];
        if (ptType) {
          classes[prefix + ptType] = true;
        }
  
        return classes;
      }
    }

    WrappedComponent.propTypes = {
      ptClass: PropTypes.string,
      ptStyle: PropTypes.string,
      ptSize: PropTypes.string,
      ptType: PropTypes.string
    };
    
    return <WrappedComponent getPtClassSet={getPtClassSet} {...props} />
  }
}

