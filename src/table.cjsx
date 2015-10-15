React = require 'react'

window.React = React

module.exports = React.createClass

  render: ->
    <table className="table-striped">
      {@props.children}
    </table>
