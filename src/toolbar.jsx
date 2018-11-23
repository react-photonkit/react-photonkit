import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class Toolbar extends Photon.Component {
	constructor(props) {
		super(props);

		this._node = this._node.bind(this);
	}

	_node(n) {
		this.node = n;
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);
		let title;

		if (this.props.title) {
			title = <h1 className="title">{this.props.title}</h1>;
		}

		if (this.props.ptType === 'footer') {
			return (
				<footer className={className} ref={this._node}>
					{title}
					{this.props.children}
				</footer>
			);
		}

		return (
			<header className={className} ref={this._node}>
				{title}
				{this.props.children}
			</header>
		);
	}
}

Toolbar.defaultProps = {
	ptClass: 'toolbar',
	ptType: 'header'
};

Toolbar.propTypes = {
	title: PropTypes.string
};
