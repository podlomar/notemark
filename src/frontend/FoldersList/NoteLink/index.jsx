import React from 'react';
import { Link } from 'react-router-dom';

const NoteLink = ({ path, note, active }) => {
  if(active) {
    return (
      <div className="folders-list__note folders-list__note--active">
        <div className="icon-note" />
        <div className="link-label">{note.name}</div>
      </div>
    );
  }

  return (
    <Link
      className="folders-list__note"
      to={`${path}/${note.link}`}
      key={note.link}
    >
      <div className="icon-note" />
      <div className="link-label">{note.name}</div>
    </Link>
  );
}

export default NoteLink;