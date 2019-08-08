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

  async fetchNote() {
    const { path } = this.props;
    if (!path) {
      return;
    }
    
    const response = await fetch(`${window.origin}/api/note/${path}`);
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
