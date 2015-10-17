React = require 'react'
{ Icon, Pane, Button } = require '../src/photon.coffee'

module.exports = React.createClass
  onClick: (param) ->
    alert "Hello, #{param}"

  render: ->
    <Pane>
      <div className="padded-more">
        <Button ptStyle="default" text="default"
                onClick={@onClick.bind(@, 'World')}/>
        <Button ptStyle="primary" text="primary" />
        <Button ptStyle="positive" text="positive" />
        <Button ptStyle="negative" text="negative" />
        <Button ptStyle="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button ptSize="mini" ptStyle="default" text="default" />
        <Button ptSize="mini" ptStyle="primary" text="primary" />
        <Button ptSize="mini" ptStyle="positive" text="positive" />
        <Button ptSize="mini" ptStyle="negative" text="negative" />
        <Button ptSize="mini" ptStyle="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button ptSize="large" ptStyle="default" text="default" />
        <Button ptSize="large" ptStyle="primary" text="primary" />
        <Button ptSize="large" ptStyle="positive" text="positive" />
        <Button ptSize="large" ptStyle="negative" text="negative" />
        <Button ptSize="large" ptStyle="warning" text="warning" />
      </div>

      <div className="padded-more">
        <Button glyph="download" />
        <Button glyph="cc" />
      </div>
      
      <div className="padded-more">
        <Icon glyph="download" />
      </div>
    </Pane>
