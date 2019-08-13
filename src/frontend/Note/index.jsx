import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import './index.scss';

const md = new MarkdownIt();

const Note = ({ folderPath, noteLink }) => {
  const [noteContent, setNoteContent] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      if (!folderPath) {
        return;
      }
      
      const response = await fetch(
        `${window.origin}/api/note/${folderPath}/${noteLink}`
      );
      const text = await response.text();
      setNoteContent(md.render(text));
    };

    fetchNote();
  }, [folderPath, noteLink]);

  return (
    <div className="note"
      dangerouslySetInnerHTML={{ __html: noteContent }}
    />
  );
}

export default Note;