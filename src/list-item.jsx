import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import * as Photon from './photon.jsx';

export default class ListItem extends Photon.Component {
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
	active: PropTypes.bool,
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

ListItem.defaultProps = {
	ptClass: 'list-group-item',
	active: false
};
