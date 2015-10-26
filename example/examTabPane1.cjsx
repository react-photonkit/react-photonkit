React = require "react"
{ Button } = require "../src/photon.coffee"

module.exports = React.createClass
  onClick: (param) ->
    alert "Hello, #{param}"

  render: ->
    <div className="padded-more">
      <h3>default buttons</h3>
      <div>
        <Button ptStyle="default" text="default"
                onClick={@onClick.bind(@, "World")}/>
        <Button ptStyle="primary" text="primary" />
        <Button ptStyle="positive" text="positive" />
        <Button ptStyle="negative" text="negative" />
        <Button ptStyle="warning" text="warning" />
      </div>

      <h3>mini buttons</h3>
      <div>
        <Button ptSize="mini" ptStyle="default" text="default" />
        <Button ptSize="mini" ptStyle="primary" text="primary" />
        <Button ptSize="mini" ptStyle="positive" text="positive" />
        <Button ptSize="mini" ptStyle="negative" text="negative" />
        <Button ptSize="mini" ptStyle="warning" text="warning" />
      </div>

      <h3>large buttons</h3>
      <div>
        <Button ptSize="large" ptStyle="default" text="default" />
        <Button ptSize="large" ptStyle="primary" text="primary" />
        <Button ptSize="large" ptStyle="positive" text="positive" />
        <Button ptSize="large" ptStyle="negative" text="negative" />
        <Button ptSize="large" ptStyle="warning" text="warning" />
      </div>
    </div>
