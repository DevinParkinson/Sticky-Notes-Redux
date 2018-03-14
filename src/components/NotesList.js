import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';


const filtered = (notes, filter) => {
  switch (filter) {
    case 'All':
      return notes;
    case 'Important':
      return notes.filter( n => !n.important)
    default:
      return notes;
  }
}

const NotesList = ({ notes, filter }) => (
  <div class="card">
  { filtered(notes, filter).map( (n) => {
      return ( <Note key={n.id} {...n} /> )
    }
    )}
  </div>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(NotesList)
