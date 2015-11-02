React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    label: React.PropTypes.string

  onChangeRadio: (event) ->
    @props.onChange event if @props.onChange

  render: ->
    <div className="radio">
      <label>
        <input {...@props} type="radio"
          onChange={@onChangeRadio} /> {@props.label}
      </label>
    </div>
