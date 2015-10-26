expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
Toolbar = require "../src/toolbar.cjsx"

describe "toolbar", () ->

  it "Should create default element", () ->
    instance = ReactTestUtils.renderIntoDocument <Toolbar />
    toolbar = ReactDOM.findDOMNode instance
    classNames = toolbar.className.split(/\s+/)

    expect(toolbar.nodeName).to.be("HEADER")
    expect(classNames).to.contain("toolbar")
    expect(classNames).to.contain("toolbar-header")


  it "Should create toolbar(header) element", () ->
    instance = ReactTestUtils.renderIntoDocument <Toolbar ptType="header" />
    toolbar = ReactDOM.findDOMNode instance
    classNames = toolbar.className.split(/\s+/)

    expect(toolbar.nodeName).to.be("HEADER")
    expect(classNames).to.contain("toolbar")
    expect(classNames).to.contain("toolbar-header")


  it "Should create toolbar(footer) element", () ->
    instance = ReactTestUtils.renderIntoDocument <Toolbar ptType="footer" />
    toolbar = ReactDOM.findDOMNode instance
    classNames = toolbar.className.split(/\s+/)

    expect(toolbar.nodeName).to.be("FOOTER")
    expect(classNames).to.contain("toolbar")
    expect(classNames).to.contain("toolbar-footer")
