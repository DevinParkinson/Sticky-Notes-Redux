import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addNote } from './actions/notes';



class NotesForm extends React.Component {
  state = {name: ''}

handleSubmit = (e) => {
  e.preventDefault()
  const { dispatch, id } = this.props
  const { name } = this.state
  const note = { name, id, important: false }
  dispatch((addNote)(note))
  dispatch(incId())
  this.setState({ name: '' })
}

handleChange = (e) => {
  this.setState({ name: e.target.value })
}

render() {
  const { name } = this.state;

  return (
    <div>
      <h3>Add Your Sticky Note</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NotesForm);
