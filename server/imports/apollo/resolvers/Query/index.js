import User from './User'
import Posts from './Posts'
import Lists from './Lists'
import Todos from './Todos'

export default {
  ...User,
  ...Posts,
  ...Lists,
  ...Todos
}
