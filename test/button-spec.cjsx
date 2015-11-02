expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
Button = require "../src/button.cjsx"

describe "button", () ->

  it "Should create default element", () ->
    instance = ReactTestUtils.renderIntoDocument <Button />
    button = ReactDOM.findDOMNode instance
    classNames = button.className.split(/\s+/)

    expect(button.nodeName).to.be("BUTTON")
    expect(classNames).to.contain("btn")
    expect(classNames).to.contain("btn-default")


  it "Should create element with text", () ->
    text = "button"
    instance = ReactTestUtils.renderIntoDocument <Button text={text} />
    button = ReactDOM.findDOMNode instance

    expect(button.textContent).to.be(text)


  it "Should create default element with size", () ->
    sizes = ["large", "mini"]
    for size in sizes
      instance = ReactTestUtils.renderIntoDocument <Button ptSize={size}/>
      button = ReactDOM.findDOMNode instance

      classNames = button.className.split(/\s+/)
      expect(classNames).to.contain("btn-#{size}")

    size = "another"
    instance = ReactTestUtils.renderIntoDocument <Button btSize={size}/>
    button = ReactDOM.findDOMNode instance

    classNames = button.className.split(/\s+/)
    expect(classNames).to.not.contain("btn-#{size}")


  it "Should create default element with style", () ->
    styles = ["default", "primary", "positive", "negative", "warning"]
    for style in styles
      instance = ReactTestUtils.renderIntoDocument <Button ptStyle={style}/>
      button = ReactDOM.findDOMNode instance

      classNames = button.className.split(/\s+/)
      expect(classNames).to.contain("btn-#{style}")

    style = "another"
    instance = ReactTestUtils.renderIntoDocument <Button ptStyle={style}/>
    button = ReactDOM.findDOMNode instance

    classNames = button.className.split(/\s+/)
    expect(classNames).to.not.contain("btn-#{style}")


  it "Should create default element with icon", () ->
    name = "home"
    element = <Button glyph={name} />
    instance = ReactTestUtils.renderIntoDocument element
    button = ReactDOM.findDOMNode instance

    icon = button.firstChild
    classNames = icon.className.split(/\s+/)
    expect(classNames).to.contain("icon-#{name}")


  it "Should create default element with icon and text", () ->
    name = "home"
    text = "button"
    element = <Button glyph={name} text={text}/>
    instance = ReactTestUtils.renderIntoDocument element
    button = ReactDOM.findDOMNode instance

    icon = button.firstChild
    classNames = icon.className.split(/\s+/)
    expect(classNames).to.contain("icon-#{name}")
    expect(button.textContent).to.be(text)


  it "Should call onClick callback", (done) ->
    onClick = () ->
      done()

    instance = ReactTestUtils.renderIntoDocument <Button onClick={onClick} />
    button = ReactDOM.findDOMNode instance
    ReactTestUtils.Simulate.click button


  it "Should be active", () ->
    instance = ReactTestUtils.renderIntoDocument <Button active />
    button = ReactDOM.findDOMNode instance

    classNames = button.className.split(/\s+/)
    expect(classNames).to.contain("active")
