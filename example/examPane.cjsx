React = require 'react'
{
  Icon, Pane
  Button, ButtonInfo
} = require '../src/photon.coffee'
{ ButtonStyle, ButtonSize } = ButtonInfo

window.React = React

module.exports = React.createClass

  onClick: (event) ->
    alert 'clicked "close"'

  render: ->
    <Pane>
      <div className="padded-more">
        <Button style={ButtonStyle.default} text="default" />
        <Button style={ButtonStyle.primary} text="primary" />
        <Button style={ButtonStyle.positive} text="positive" />
        <Button style={ButtonStyle.negative} text="negative" />
        <Button style={ButtonStyle.warning} text="warning" />
      </div>

      <div className="padded-more">
        <Button size={ButtonSize.mini} style={ButtonStyle.default} text="default" />
        <Button size={ButtonSize.mini} style={ButtonStyle.primary} text="primary" />
        <Button size={ButtonSize.mini} style={ButtonStyle.positive} text="positive" />
        <Button size={ButtonSize.mini} style={ButtonStyle.negative} text="negative" />
        <Button size={ButtonSize.mini} style={ButtonStyle.warning} text="warning" />
      </div>

      <div className="padded-more">
        <Button size={ButtonSize.large} style={ButtonStyle.default} text="default" />
        <Button size={ButtonSize.large} style={ButtonStyle.primary} text="primary" />
        <Button size={ButtonSize.large} style={ButtonStyle.positive} text="positive" />
        <Button size={ButtonSize.large} style={ButtonStyle.negative} text="negative" />
        <Button size={ButtonSize.large} style={ButtonStyle.warning} text="warning" />
      </div>

      <div className="padded-more">
        <Button icon="icon-download" />
        <Button icon="icon-cc" />
      </div>
    </Pane>
