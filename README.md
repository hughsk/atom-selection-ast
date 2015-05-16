# atom-selection-ast
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/atom-selection-ast.svg?style=flat)
![](http://img.shields.io/npm/dm/atom-selection-ast.svg?style=flat)
![](http://img.shields.io/npm/l/atom-selection-ast.svg?style=flat)

Test if an AST node is within the current selection in
[Atom](http://atom.io/).

Note that you'll need to enable `loc` values for your AST
nodes when you're parsing.

## Usage

[![NPM](https://nodei.co/npm/atom-selection-ast.png)](https://nodei.co/npm/atom-selection-ast/)

### `test = selection(source)`

Pass in the plaintext JavaScript `source` for your AST
to prepare the module for searching.

### `test(astNode, selectionRanges)`

Returns `true` if `astNode` is within one of `selectionRanges`,
where `selectionRanges` is an array of Atom
[Range](https://atom.io/docs/api/v0.199.0/Range) values.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/atom-selection-ast/blob/master/LICENSE.md) for details.
