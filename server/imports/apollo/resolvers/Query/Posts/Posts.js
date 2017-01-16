import { Posts } from 'api/collections/Posts'

export default function (root, args, context) {
  if (context.userId) {
    return Posts.find({ userId: context.userId }).fetch()
  }
}
