import { Todos } from 'api/collections/Todos'

export default function (root, args, context) {
  if (args.count) {
    return Todos.find({ listId: context.listId }).limit(args.count).fetch()
  }
}

