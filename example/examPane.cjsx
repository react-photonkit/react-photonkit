React = require 'react'
{ Icon, Pane, Button } = require '../src/photon.coffee'

module.exports = React.createClass
  onClick: (param) ->
    alert "Hello, #{param}"

  render: ->
    <Pane>
      <div className="padded-more">
        <Button style="default" text="default"
                onClick={@onClick.bind(@, 'World')}/>
        <Button style="primary" text="primary" />
        <Button style="positive" text="positive" />
        <Button style="negative" text="negative" />
        <Button style="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button size="mini" style="default" text="default" />
        <Button size="mini" style="primary" text="primary" />
        <Button size="mini" style="positive" text="positive" />
        <Button size="mini" style="negative" text="negative" />
        <Button size="mini" style="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button size="large" style="default" text="default" />
        <Button size="large" style="primary" text="primary" />
        <Button size="large" style="positive" text="positive" />
        <Button size="large" style="negative" text="negative" />
        <Button size="large" style="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button icon="download" />
        <Button icon="cc" />
      </div>
    </Pane>
