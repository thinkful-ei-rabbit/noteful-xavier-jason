import React from 'react';
import Header from './Header';
import FolderList from './FolderList'
import Note from './Note'


const Main = (props) => {
    return ( 
        <div className="wrapper">
                <div className="side-bar">
                    <FolderList {...props}/>
                </div>
      <main className="main-content">
        <Header />
        <div className="note-area">
        <Note {...props}/>
        </div>
      </main>
    </div>
     );
}
 
export default Main;