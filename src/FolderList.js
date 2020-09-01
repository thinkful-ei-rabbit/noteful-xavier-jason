import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import Note from './Note';

const FolderList = (props) => {
    console.log(props);
    return ( 
            <div className="folder-list">
                <ul>
                    {props.folders.map(folder =>
                        <li key={folder.id}>
                        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                        </li>
                    )}
                </ul>
                <button>Add Folder</button>
            </div>
     );
}
 
export default FolderList;