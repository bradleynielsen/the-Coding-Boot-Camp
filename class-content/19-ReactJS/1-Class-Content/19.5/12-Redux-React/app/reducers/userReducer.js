export default function reducer(state={
    textField:'',
    user: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_TEXTFIELD':
        return {...state, textField: action.payload}
      case 'CHANGE_USER':
        return {...state, user: state.textField, textField: ''}      
      default:
        return state;
    }
}
