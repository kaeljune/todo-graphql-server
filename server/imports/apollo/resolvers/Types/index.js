import User from './User'
import Posts from './Posts'
import Lists from './Lists'
import Date from './Todos'

export default {
  ...User,
  ...Posts,
  ...Lists,
  ...Date
}
