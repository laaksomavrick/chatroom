import { connect } from 'react-redux'
import { MessageList } from '../components/MessageList'


/*
 *  mapStateToProps describes how to transform the current Redux store state 
 *  into the props you want to pass to the presentational component being wrapped
 */
const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

/*
 * In addition to reading the state, container components can dispatch actions. 
 * In a similar fashion, you can define a function called mapDispatchToProps() 
 * that receives the dispatch() method and returns callback props that you 
 * want to inject into the presentational component.
 *
 * const mapDispatchToProps = dispatch => {
 *     return {
 *         onMessageClick: id => {
 *             dispatch(doSomething(id))
 *         }
 *     }
 * }
 */

const MessageContainer = connect(
  mapStateToProps
)(MessageList)

export default MessageContainer