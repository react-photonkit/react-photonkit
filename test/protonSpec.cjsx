expect = require 'expect.js'
React = require 'react'
Proton = require '../src/photon.coffee'

describe 'proton', () ->

  it 'should have components', () ->
    expect(Proton).to.be.ok()
    expect(Proton.Toolbar).to.be.ok()
    expect(Proton.Button).to.be.ok()
