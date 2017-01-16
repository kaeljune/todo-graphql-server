import { Posts } from '../collections/Posts'

export default () => {
  if (Posts.find({}).count() === 0) {
    let posts = [
      { title: 'A hundred reasons why Meteor is great!', userId: '4gRM2DqbFsqwrydhe' },
      { title: 'Why you should learn GraphQL with Apollo.', userId: '4gRM2DqbFsqwrydhe' },
      { title: 'React has a promising future.', userId: 'eZBbH3NHfJEDhFoxy' }
    ]

    console.log(`Add posts to the database.`)

    posts.map((post) => {
      Posts.insert(post)
    })
  }
}

