React = require "react"
styleMaps = require "./style-maps.coffee"

module.exports =
  getPtClassSet: ->
    classes = {}
    ptClass = @props.ptClass and styleMaps.CLASSES[@props.ptClass]

    if ptClass
      classes[ptClass] = true
      prefix = "#{ptClass}-"
      ptSize = @props.ptSize and styleMaps.SIZES[@props.ptSize]

      if ptSize
        classes[prefix + ptSize] = true

      if @props.ptStyle
        if styleMaps.STYLES.indexOf(@props.ptStyle) >= 0
          classes[prefix + @props.ptStyle] = true
        else
          classes[@props.ptStyle] = true

      ptType = @props.ptType and styleMaps.TYPES[@props.ptType]
      if ptType
        classes[prefix + ptType] = true

    classes
