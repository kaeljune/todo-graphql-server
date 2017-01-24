import { Posts } from '../collections/Posts'
import { Lists } from '../collections/Lists'
import { Todos } from '../collections/Todos'
import { _ } from 'lodash'

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
  if (Lists.find({}).count() === 0) {
    let lists = [
      { name: 'Meteor is great!', incompleteCount: 7, private: true, userId: '4gRM2DqbFsqwrydhe' },
      { name: 'GraphQL with Apollo.', incompleteCount: 7, private: true, userId: '4gRM2DqbFsqwrydhe' },
      { name: 'React has a promising future.', incompleteCount: 7, private: true, userId: 'eZBbH3NHfJEDhFoxy' }
    ]

    console.log(`Add lists to the database.`)

    lists.map((list) => {
      Lists.insert(list)
    })
  }
  if (Todos.find({}).count() === 0) {
    let todos = [
      { text: 'Simplicity Equals Productivity', createdAt: _.now(), checked: false, listId: 'TcZdCr5HywBhz2Mmt' },
      { text: 'Simplicity Equals Creativity', createdAt: _.now(), checked: true, listId: 'TcZdCr5HywBhz2Mmt' },
      { text: 'Simplicity Equals Productivity', createdAt: _.now(), checked: true, listId: 'TcZdCr5HywBhz2ABC' }
    ]

    console.log(`Add todos to the database.`)

    todos.map((todo) => {
      Todos.insert(todo)
    })
  }
}

