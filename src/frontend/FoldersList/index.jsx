import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class FoldersList extends React.Component {
  render() {
    const { path, folders, notes, onNoteSelect } = this.props;
    return (
      <div className="folders-list">
        {folders.map(folder => (
          <Link 
            to={`${path}/${folder.link}`}
            className="folders-list__folder"
            key={folder.link}
          >
            <div className="icon-folder" />
            <div className="link-label">{folder.name}</div>
          </Link>
        ))}
        {notes.map(note => (
          <Link
            className="folders-list__note"
            to={`${path}/${note.link}`}
            key={note.link}
          >
            <div className="icon-note" />
            <div className="link-label">{note.name}</div>
          </Link>
        ))}
      </div>
    );
  }
}