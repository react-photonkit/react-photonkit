React = require 'react'

module.exports = React.createClass
  render: ->
    <div className="pane-group">
      <div className="pane pane-sm sidebar">
        <nav className="nav-group">
          {@props.children}
        </nav>
      </div>
    </div>
