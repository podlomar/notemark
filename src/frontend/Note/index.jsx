import React from 'react';
import MarkdownIt from 'markdown-it';
import './index.scss';

const md = new MarkdownIt();

export default class Note extends React.Component {
  
  state = {
    noteContent: ''
  }

  componentDidMount() {
    this.fetchNote();
  }

  componentDidUpdate(prevProps) {
    if (this.props.noteLink !== prevProps.noteLink) {
      this.fetchNote();
    }
  }

  async fetchNote() {
    const { folderPath, noteLink } = this.props;
    if (!folderPath) {
      return;
    }
    
    const response = await fetch(`${window.origin}/api/note/${folderPath}/${noteLink}`);
    const text = await response.text();
    this.setState({noteContent: md.render(text)});
  }

  render() {
    const { noteContent } = this.state;
    return (
      <div className="note"
        dangerouslySetInnerHTML={{ __html: noteContent }}
      />
    );
  }
}
