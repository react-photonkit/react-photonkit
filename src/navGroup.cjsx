React = require 'react'
classNames = require 'classnames'
PhotonMixin = require './photonMixin.coffee'
{ PaneGroup } = require '../src/photon.coffee'

module.exports = React.createClass
  mixins: [PhotonMixin],

  getDefaultProps: ->
    ptClass: 'nav-group'

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    <nav className={className}>
      {@props.children}
    </nav>
