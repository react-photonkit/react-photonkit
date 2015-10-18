expect = require 'expect.js'
React = require 'react'
Proton = require '../src/photon.coffee'

describe 'proton', () ->

  it 'should have components', () ->
    expect(Proton.Actionbar).to.be.ok()
    expect(Proton.Button).to.be.ok()
    expect(Proton.ButtonGroup).to.be.ok()
    expect(Proton.Content).to.be.ok()
    expect(Proton.Icon).to.be.ok()
    expect(Proton.NavGroup).to.be.ok()
    expect(Proton.NavGroupItem).to.be.ok()
    expect(Proton.NavTitle).to.be.ok()
    expect(Proton.Pane).to.be.ok()
    expect(Proton.PaneGroup).to.be.ok()
    expect(Proton.TabGroup).to.be.ok()
    expect(Proton.TabItem).to.be.ok()
    expect(Proton.Table).to.be.ok()
    expect(Proton.Title).to.be.ok()
    expect(Proton.Toolbar).to.be.ok()
    expect(Proton.Window).to.be.ok()
