const Counter = (state = { counter1:1 , counter2:1 }, action) => {
  switch (action.type) {
      case 'INCREMENT':
          return {
              ...state,
              counter1: state.counter1 + 1,
              counter2: state.counter2 + 2
          };
      case 'DECREMENT':
          return {
              ...state,
              counter1: state.counter1 - 1,
              counter2: state.counter2 - 2
          };
      case 'MULTIPLICATION':
          return {
              ...state,
              counter1: state.counter1 * 2,
              counter2: state.counter2 * 2
          };
      case 'DIVISION':
          return {
              ...state,
              counter1: state.counter1 / 2,
              counter2: state.counter2 / 2
          };

      default:
          return state
  }
}
export default Counter;