expect = require "expect.js"
React = require "react"
ReactTestUtils = require "react/lib/ReactTestUtils"
ReactDOM = require "react-dom"
Table = require "../src/table.cjsx"

describe "table", () ->

  it "Should create default element", () ->
    instance = ReactTestUtils.renderIntoDocument <Table />
    node = ReactDOM.findDOMNode instance

    expect(node.className).to.be("table-striped")
