React = require "react"

module.exports = React.createClass
  render: ->
    <table className="table-striped">
      {@props.children}
    </table>
