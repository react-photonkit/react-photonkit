React = require "react"

module.exports = React.createClass
  propTypes:
    items: React.PropTypes.array

  getDefaultProps: ->
    items: []

  getSelectedIndex: ->
    @refs.select.selectedIndex if @refs.select

  render: ->
    if @props.items.length > 0
      items = @props.items.map (item, i) ->
        <option key="option-#{i}">{item}</option>
      <select ref="select" className="form-control">
        {items}
      </select>
    else
      <span />
