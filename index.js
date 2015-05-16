const position = require('file-position')
const clone    = require('clone')

module.exports = selectionAST

function selectionAST(src) {
  const lookup = position(src)

  return function(node, ranges) {
    return included(lookup, node, ranges)
  }
}

function included(lookup, node, ranges) {
  for (var i = 0; i < ranges.length; i++) {
    var loc = clone(node.loc)

    loc.start.line--
    loc.end.line--

    var a = getIndex(lookup, ranges[i])
    var b = getIndex(lookup, loc)

    if (overlap(a, b)) return true
  }

  return false
}

function overlap(a, b) {
  if (a.end >= b.start && a.start <= b.start) return true
  if (b.end >= a.start && b.start <= a.start) return true
  if (a.start <= b.start && a.end >= b.end) return true
  if (b.start <= a.start && b.end >= a.end) return true
}

function getIndex(lookup, range, off) {
  off = off || 0

  return {
    start: lookup((range.start.row || range.start.line) + off, range.start.column)
    , end: lookup((range.end.row || range.end.line) + off, range.end.column)
  }
}
