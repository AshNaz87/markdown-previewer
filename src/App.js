import React from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import './stylesheets/App.scss'

function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />      
    </div>
  );
}

export default App;
