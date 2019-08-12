import React from 'react';
import Header from '../Header';
import Navigator from '../Navigator';
import Note from '../Note';
import './index.scss';

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      folderPath: null,
      folders: [],
      notes: [],
      note: null,
      keepNavigatorOnMobile: false,
    };
  }

  async fetchFolders() {
    const { path } = this.props;
    const response = await fetch(`${window.origin}/api/tree${path}`);
    const { 
      folderPath, folders, notes, note 
    } = await response.json();
    this.setState({ folderPath, folders, notes, note });
  }

  componentDidMount() {
    this.fetchFolders();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.fetchFolders();
    }
  }

  toggleNavigator = () => {
    this.setState(prev => (
      { keepNavigatorOnMobile: !prev.keepNavigatorOnMobile}
    ));
  }

  render() {
    const { 
      folderPath, folders, notes, note, keepNavigatorOnMobile
    } = this.state;
    
    const noteActive = note && !keepNavigatorOnMobile ? ' main--hide-navigator' : '';
    const mainClassName = `main${noteActive}`;

    return (
      <div className={mainClassName}>
        <div className="main__header">
          <Header onToggleMenu={this.toggleNavigator} />
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
}