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
    ptClass: "nav-group"
    draggable: false

  renderNav: (child, index) ->
    active = @state.activeKey == child.props.eventKey
    React.cloneElement child,
      active: active
      key: "nav-group-item-#{index}"
      onClick: () =>
        @setState activeKey: child.props.eventKey
        @props.onSelect child.props.eventKey if @props.onSelect

  sortableOptions:
    ref: "navs"
    model: "children"
    disabled: true

  componentWillMount: ->
    @sortableOptions.disabled = !@props.draggable

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes

    renderNav = (child, index) =>
      @renderNav child, index
    childNavs = @state.children.map renderNav if @state.children

    <nav className={className} ref="navs">
      {childNavs}
    </nav>
