import { Meteor } from 'meteor/meteor'
import Lists from 'api/collections/Lists'
import { pubsub } from 'api/apollo/index'

export default function (root, args, context) {
  if (context.userId) {
    return Lists.insert(args, (response) => {
      if (response) {
        args._id = response
        pubsub.publish('listInserted', args)
      }
    })
  } else {
    throw new Meteor.Error('permission-denied', 'Insufficient rights for this action.')
  }
}

