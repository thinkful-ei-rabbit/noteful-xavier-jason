import React, { Component } from 'react';
import './App.css';
import store from './store';
import FolderList from './FolderList';
import Header from './Header';
import Note from './Note';
import NoteCard from './NoteCard';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: store.notes,
      folders: store.folders
     }
  }

  renderListHandling() {
    const { notes, folders } = this.state;
      return (
        <>
          <Route
            exact
            path={['/folder/:folderId', '/', '/note/:noteId']}
            render={(routeProps) =>
            <FolderList
              folders={folders}
              note={notes}
              {...routeProps}
              />
            }
          />
          {/* <Route
            exact
            path='/note/:noteId'
            render={(routeProps) =>
              <NoteCardNav 
                notes={notes}
                {...routeProps}
              />
            }
          /> */}
        </>
      )
  }

  renderNoteHandling() {
    const { notes } = this.state;
    return (
      <>
        <Route
          exact
          path={['/folder/:folderId', '/']}
          render={(routeProps) =>
            <Note
              {...routeProps}
              notes={notes}
            />
          }
        />
        <Route
            exact
            path='/note/:noteId'
            render={(routeProps) =>
              <NoteCard 
                notes={notes}
                {...routeProps}
              />
            }
          />
      </>
    );
  }

  render() { 
    return ( 
      <div className="wrapper">
              <div className="side-bar">
                {this.renderListHandling()}
              </div>
    <main className="main-content">
      <Header />
      <div className="note-area">
        {this.renderNoteHandling()}
      </div>
    </main>
  </div>
   );
  }
}

export default App;