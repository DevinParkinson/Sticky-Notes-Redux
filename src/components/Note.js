import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes';


const styles = {
  important: { textDecorationLine: 'underline',
  color: 'red',
  }
}

const Note = ({ id, name, important, dispatch}) => (
  <li
    style={ important ? styles.important : {} }
    onClick={ () => dispatch(toggleNote(id)) }
    >
      {name}
  </li>
)

export default connect()(Note);
