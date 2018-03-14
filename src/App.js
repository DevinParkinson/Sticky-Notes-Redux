import React from 'react';
import './App.css';
import NotesForm from './components/NotesForm';
import NotesList from './components/NotesList';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <NotesForm />
    <NotesList />
    <Footer />
  </div>
)


export default App;
