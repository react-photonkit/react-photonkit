React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"
SortableMixin = require "../node_modules/sortablejs/react-sortable-mixin"

module.exports = React.createClass
  mixins: [PhotonMixin, SortableMixin],

  propTypes:
    activeKey: React.PropTypes.any
    onSelect: React.PropTypes.func
    draggable: React.PropTypes.bool

  getInitialState: ->
    activeKey: @props.activeKey
    children: @props.children

  getDefaultProps: ->
    ptClass: "tab-group"
    draggable: false

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

  sortableOptions:
    ref: "tabs"
    model: "children"
    disabled: true

  componentWillMount: ->
    @sortableOptions.disabled = !@props.draggable

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    renderTab = (child, index) =>
      @renderTab child, index
    renderPane = (child, index) =>
      @renderPane child, index

    childTabs = @state.children.map renderTab if @state.children
    childPane = @state.children.map renderPane if @state.children

    <div>
      <div className={className} ref="tabs">
        {childTabs}
      </div>
      <div ref="contents">
        {childPane}
      </div>
    </div>
