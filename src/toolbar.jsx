import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class Toolbar extends Photon.createClass {
	getDefaultProps() {
		return {
			ptClass: 'toolbar',
			ptType: 'header'
		};
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		let title;

		if (this.title) {
			title = <h1 className="title">{this.props.title}</h1>;
		}

		if (this.props.ptType === 'footer') {
			return (
				<footer className={className}>
					{title}
					{this.props.children}
				</footer>
			);
		}

		return (
			<header className={className}>
				{title}
				{this.props.children}
			</header>
		);
	}
}

Toolbar.propTypes = {
	title: React.PropTypes.string
};
