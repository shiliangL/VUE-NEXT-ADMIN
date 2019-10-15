
function CubeOverlay(point, text, tipText) {
  this._point = point
  this._text = text
  this._tipText = tipText
}

// eslint-disable-next-line no-undef
CubeOverlay.prototype = new BMap.Overlay()
CubeOverlay.prototype.initialize = function(map) {
  this._map = map
  const div = this._div = document.createElement('div')
  const backColor = 'green'
  // 覆盖物样式
  div.style.position = 'absolute'
  // eslint-disable-next-line no-undef
  div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat)
  div.style.color = '#000'
  div.style.whiteSpace = 'nowrap'
  div.style.MozUserSelect = 'none'
  div.style.fontSize = '12px'
  div.style.textAlign = 'center'
  div.className = 'point'

  // 指标
  const tip = document.createElement('span')
  div.appendChild(tip)
  tip.appendChild(document.createTextNode(this._tipText))
  tip.className = 'tip'
  tip.style.display = 'block'
  tip.style.backgroundColor = backColor
  tip.style.borderRadius = 3 + 'px'
  tip.style.padding = 1 + 'px'
  tip.style.paddingRight = 5 + 'px'
  tip.style.paddingLeft = 5 + 'px'
  tip.style.fontSize = 15 + 'px'

  // 箭头
  const arrow = document.createElement('span')
  arrow.style.display = 'block'
  arrow.style.width = 0
  arrow.style.height = 0
  arrow.style.borderWidth = 6 + 'px'
  arrow.style.borderColor = 'green transparent transparent transparent'
  arrow.style.borderStyle = 'solid'
  arrow.style.backgroundColor = 'transparent'
  arrow.style.margin = '0 auto'
  arrow.style.marginBottom = -5 + 'px'
  div.appendChild(arrow)

  // 地点
  const nameText = this._span = document.createElement('span')
  div.appendChild(nameText)
  nameText.appendChild(document.createTextNode(this._text))
  nameText.style.backgroundColor = '#fff'
  nameText.style.display = 'block'
  nameText.style.border = '1px solid #ddd'
  nameText.style.padding = 2 + 'px'

  map.getPanes().labelPane.appendChild(div)

  return div
}
CubeOverlay.prototype.draw = function() {
  var map = this._map
  var pixel = map.pointToOverlayPixel(this._point)
  this._div.style.left = pixel.x + 'px'
  this._div.style.top = pixel.y - 30 + 'px'
}
