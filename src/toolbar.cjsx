React = require "react"
classNames = require "classnames"
PhotonMixin = require "./photon-mixin.coffee"

module.exports = React.createClass
  mixins: [PhotonMixin],

  propTypes:
    title: React.PropTypes.string

  getDefaultProps: ->
    ptClass: "toolbar"
    ptType: "header"

  render: ->
    classes = @getPtClassSet()
    className = classNames @props.className, classes
    title = <h1 className="title">{@props.title}</h1> if @props.title

    if @props.ptType == "footer"
      <footer className={className}>
        {title}
        {@props.children}
      </footer>
    else
      <header className={className}>
        {title}
        {@props.children}
      </header>
