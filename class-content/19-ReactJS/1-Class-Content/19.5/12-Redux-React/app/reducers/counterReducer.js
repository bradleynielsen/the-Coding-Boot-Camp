export default function reducer(state={
    count: 0
  }, action) {

    switch (action.type) {
      case 'INC_COUNT':
        return {...state, count: state.count+action.payload}
      case 'DEC_COUNT':
        return {...state, count: state.count-action.payload}
      default:
        return state;
    }
}
