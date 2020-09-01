import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';

const FolderList = (props) => {

    return ( 
        <Router>
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
        </Router>
     );
}
 
export default FolderList;