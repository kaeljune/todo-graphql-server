import { Meteor } from 'meteor/meteor'
import Posts from 'api/collections/Posts'
import { pubsub } from 'api/apollo/index'

export default function (root, args, context) {
  if (context.userId) {
    return Posts.insert(args, (response) => {
      if (response) {
        args._id = response
        pubsub.publish('postInserted', args)
      }
    })
  } else {
    throw new Meteor.Error('permission-denied', 'Insufficient rights for this action.')
  }
}
