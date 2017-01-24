import { Todos } from 'api/collections/Todos'
export default {
  List: {
    todos (list) {
      return Todos.find({ listId: list._id }).fetch()
    }
  }
}
