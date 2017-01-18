import { createStore } from 'redux'

const reducer = function(state, action) {
  switch (action.type) {
    case 'INC_COUNT':
      return {...state, count: state.count+action.payload}
    case 'DEC_COUNT':
      return {...state, count: state.count-action.payload}
    case 'CHANGE_USER':
      return {...state, user: action.payload}
    case 'CHANGE_LOCATION':
      return {...state, location: action.payload}
    default:
      return state;
  }
}

const store = createStore(reducer, {
  count: 0,
  user: '', 
  location:''
});

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({type: 'INC_COUNT', payload: 1})
store.dispatch({type: 'INC_COUNT', payload: 30})
store.dispatch({type: 'DEC_COUNT', payload: 20})
store.dispatch({type: 'CHANGE_USER', payload: 'Alex'})
store.dispatch({type: 'CHANGE_LOCATION', payload: 'Austin'})




