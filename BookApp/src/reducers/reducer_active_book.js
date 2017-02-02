// Stae argument os not application state, only the
// state that it is responsible for

// ES6: state = null, if state is empty when it comes in set it to null
export default function ActiveBook(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
