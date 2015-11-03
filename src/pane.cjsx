React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    sidebar: React.PropTypes.bool

  getDefaultProps: ->
    ptClass: "pane"
    sidebar: false

  render: ->
    classes = @getPtClassSet()
    classes["sidebar"] = @props.sidebar
    className = classNames @props.className, classes

    <div className={className}>
      {@props.children}
    </div>
