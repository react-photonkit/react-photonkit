expect = require 'expect.js'
React = require 'react'
Proton = require '../src/photon.coffee'

describe 'proton', () ->
  it 'should exist components', () ->
    expect(Proton).to.be.ok()
