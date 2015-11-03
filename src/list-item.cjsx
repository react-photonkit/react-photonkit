React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    active: React.PropTypes.bool
    image: React.PropTypes.string
    title: React.PropTypes.string.isRequired
    subtitle: React.PropTypes.string

  getDefaultProps: ->
    ptClass: "list-group-item"
    active: false

  render: ->
    classes = @getPtClassSet()
    classes["active"] = @props.active
    className = classNames @props.className, classes
    img = <img className="img-circle media-object pull-left"
      src={@props.image} width="32" height="32" /> if @props.image

    <li className={className}>
      {img}
      <div className="media-body">
        <strong>{@props.title}</strong>
        <p>{@props.subtitle}</p>
      </div>
    </li>
