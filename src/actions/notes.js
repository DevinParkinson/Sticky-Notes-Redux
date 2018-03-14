export const ADD_Note = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';

export const addNote = (note) => {
  return { type: 'ADD_NOTE', note }
}

export const toggleNote = (id) => {
  return { type: 'TOGGLE_NOTE', id }
}
