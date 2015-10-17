React = require 'react'
classNames = require 'classnames'
PhotonMixin = require './photonMixin.coffee'

module.exports = React.createClass
  mixins: [PhotonMixin],

  getDefaultProps: ->
    ptClass: 'toolbar'
    ptType: 'header'

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    <div className={className}>
      {@props.children}
    </div>
