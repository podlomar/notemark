import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Navigator from '../Navigator';
import Note from '../Note';
import './index.scss';

const Main = ({ path }) => {
  const [content, setContent] = useState({
    folderPath: null,
    folders: [],
    notes: [],
    note: null,
  });

  const [keepNavigatorOnMobile, setKeepNavigatorOnMobile] = 
    useState(false);

  useEffect(() => {
    const fetchFolders = async () => {
      const response = await fetch(`${window.origin}/api/tree${path}`);
      const json = await response.json();
      setContent(json);
    };

    fetchFolders();
  }, [path]);

  const toggleNavigator = () => setKeepNavigatorOnMobile(!keepNavigatorOnMobile);

  const { folderPath, folders, notes, note } = content;
    
  const noteActive = note && !keepNavigatorOnMobile ? ' main--hide-navigator' : '';
  const mainClassName = `main${noteActive}`;

  return (
    <div className={mainClassName}>
      <div className="main__header">
        <Header onToggleMenu={toggleNavigator} />
      </div>
      <div className="main__navigator">
        <Navigator 
          folderPath={folderPath} 
          folders={folders}
          notes={notes}
          activeLink={note}
        />
      </div>
      <div className="main__notepage">
        { note ? <Note folderPath={folderPath} noteLink={note} /> : null }
      </div>
    </div>
  );
}

export default Main;