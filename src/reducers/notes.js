const ADD_NOTE = 'ADD_NOTE'
const TOGGLE_NOTE = 'TOGGLE_NOTE'

const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.notes
    case ADD_NOTE:
      return [action.note, ...state];
    case TOGGLE_NOTE:
      return state.map( note => {
        if (note.id === action.id)
          return { ...note, important: !note.important}
        return note
      })
    default:
      return state
  }
}

export default notes;
