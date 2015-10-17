React = require 'react'
classNames = require 'classnames'
PhotonMixin = require './photonMixin.coffee'

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    activeKey: React.PropTypes.any
    onSelect: React.PropTypes.func

  getInitialState: ->
    activeKey: @props.activeKey

  getDefaultProps: ->
    ptClass: 'tab-group'

  renderTab: (child, index) ->
    active = @state.activeKey == child.props.eventKey
    React.cloneElement child,
      active: active
      key: "tab-item-#{index}"
      onClick: () =>
        @setState activeKey: child.props.eventKey
        @props.onSelect child.props.eventKey if @props.onSelect

  renderPane: (child, index) ->
    active = @state.activeKey == child.props.eventKey
    try
      child.props.children if active
    catch
      null

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    renderTab = (child, index) =>
      @renderTab child, index
    renderPane = (child, index) =>
      @renderPane child, index

    childTabs = @props.children.map renderTab if @props.children
    childPane = @props.children.map renderPane if @props.children

    <div>
      <nav className={className}>
        {childTabs}
      </nav>
      <div>
        {childPane}
      </div>
    </div>
