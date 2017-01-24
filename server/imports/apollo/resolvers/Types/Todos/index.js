import { _ } from 'lodash'
export default {
  Date: {
    __parseValue (value) {
      return _.now(value) // value from the client
    },
    __serialize (value) {
      return _.now(value) // value sent to the client
    },
    __parseLiteral (ast) {
      if (ast.kind === _.isInteger(ast)) {
        return _.parseInt(ast.value, 10) // ast value is always in string format
      }
      return null
    }
  }
}
