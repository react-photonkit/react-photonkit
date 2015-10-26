React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photonMixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    activeKey: React.PropTypes.any
    onSelect: React.PropTypes.func

  getInitialState: ->
    activeKey: @props.activeKey

  getDefaultProps: ->
    ptClass: "nav-group"

  renderTab: (child, index) ->
    active = @state.activeKey == child.props.eventKey
    React.cloneElement child,
      active: active
      key: "nav-group-item-#{index}"
      onClick: () =>
        @setState activeKey: child.props.eventKey
        @props.onSelect child.props.eventKey if @props.onSelect

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    renderTab = (child, index) =>
      @renderTab child, index
    childTabs = @props.children.map renderTab if @props.children

    <nav className={className}>
      {childTabs}
    </nav>
