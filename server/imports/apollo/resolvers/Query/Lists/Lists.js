import { Lists } from 'api/collections/Lists'

export default function (root, args, context) {
  if (context.userId) {
    return Lists.find({ userId: context.userId }).fetch()
  }
}
