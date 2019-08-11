import React from 'react';
import { Link } from 'react-router-dom';
import NoteLink from './NoteLink';
import './index.scss';

export default class Navigator extends React.Component {
  render() {
    const { path, folders, notes, activeLink } = this.props;
    return (
      <div className="navigator">
        {folders.map(folder => (
          <Link
            to={`${path}/${folder.link}`}
            className="navigator__folder"
            key={folder.link}
          >
            <div className="icon-folder" />
            <div className="link-label">{folder.name}</div>
          </Link>
        ))}
        { notes.map(note => (
          <NoteLink 
            key={note.link} 
            path={path} 
            note={note}
            active={activeLink === note.link}
          />
        )) }
      </div>
    );
  }
}