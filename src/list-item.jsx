import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class ListItem extends Photon.createClass {
	getDefaultProps() {
		return {
			ptClass: 'list-group-item',
			active: false
		};
	}

	render() {
		const classes = this.getPtClassSet();
		classes.active = this.props.active;
		const className = classNames(this.props.className, classes);
		let img;

		if (this.props.image) {
			img = (
				<img className="img-circle media-object pull-left" src={this.props.image} width="32" height="32"/>
			);
		}

		return (
			<li className={className}>
				{img}
				<div className="media-body">
					<strong>{this.props.title}</strong>
					<p>{this.props.subtitle}</p>
				</div>
			</li>
		);
	}
}

ListItem.propTypes = {
	active: React.PropTypes.bool,
	image: React.PropTypes.string,
	title: React.PropTypes.string.isRequired,
	subtitle: React.PropTypes.string
};
