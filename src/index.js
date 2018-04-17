import Parser from 'stylus/lib/parser.js'

import visitor from './visitor/index.js'
import { nodesToJSON } from './util.js'

export default function converter (result, option = 'scss') {
  if (typeof result !== 'string') return result
  const ast = new Parser(result).parse()
  return visitor(ast, option)
}