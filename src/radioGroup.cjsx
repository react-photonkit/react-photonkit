React = require "react"

module.exports = React.createClass
  getInitialState: ->
    checkedIndex: 0

  propTypes:
    name: React.PropTypes.string.isRequired

  onChange: (index) ->
    @setState checkedIndex: index

  getCheckedIndex: ->
    @state.checkedIndex

  getChildren: ->
    children = []
    index = 0
    for child, i in @props.children
      extra = key: i
      checked = @state.checkedIndex == index
      extra.name = @props.name
      extra.checked = checked
      extra.onChange=@onChange.bind(@, index++)
      children.push(React.cloneElement(child, extra))
    @children = children
    children

  render: ->
    <div>
      {@getChildren()}
    </div>
