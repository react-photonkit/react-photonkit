import styleMaps from './style-maps.js';

export default class StyleMaps {
	static getPtClassSet() {
		const classes = {};
		const ptClass = this.props.ptClass && styleMaps.CLASSES[this.props.ptClass];

		if (ptClass) {
			classes[ptClass] = true;
			const prefix = '#{ptClass}-';
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
