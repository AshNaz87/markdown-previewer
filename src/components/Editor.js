import React, { Component } from 'react'
import Markdown from 'markdown-to-jsx'
import '../stylesheets/editor.scss'

class Editor extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)    
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    }) 
  }

  render() {
    return (
      <>
        <h1>Markdown Preview Exercise</h1>
        <textarea 
          className="editor"
          id="editor"
          name="editor"
          value={ this.state.text }
          onChange={ this.handleChange }
          rows="20"
          cols="50"
        >          
        </textarea>
        <aside className="preview" id="preview">
          <Markdown options={{ forceBlock: true }}>
            { this.state.text }
          </Markdown>
        </aside>
      </>
    )
  }
}

export default Editor