import React from 'react';
import FoldersList from '../FoldersList';
import Note from '../Note';
import './index.scss';

export default class NotesPage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      folders: [],
      notes: [],
      note: null,
    };
  }

  async fetchFolders() {
    const { path } = this.props;
    const response = await fetch(`${window.origin}/api/tree${path}`);
    const { folders, notes, note } = await response.json();
    this.setState({ folders, notes, note });
  }

  componentDidMount() {
    this.fetchFolders();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.fetchFolders();
    }
  }

  render() {
    const { path } = this.props;
    console.log(path);
    const { folders, notes, note } = this.state;
    return (
      <div className="notes-page">
        <FoldersList 
          path={path} 
          folders={folders}
          notes={notes}
          activeLink={note}
        />
        { note ? <Note path={path} note={note} /> : null }
      </div>
    );
  }
}