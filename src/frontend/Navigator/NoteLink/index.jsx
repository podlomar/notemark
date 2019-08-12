import React from 'react';
import { Link } from 'react-router-dom';

const NoteLink = ({ folderPath, note, active }) => (
  active ? (
    <div className="navigator__note navigator__note--active">
      <div className="icon-note" />
      <div className="link-label">{note.name}</div>
    </div>
  ) : (
    <Link
      className="navigator__note"
      to={`/${folderPath}/${note.link}`}
      replace
      key={note.link}
    >
      <div className="icon-note" />
      <div className="link-label">{note.name}</div>
    </Link>
  )
)

export default NoteLink;