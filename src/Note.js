import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import Moment from 'react-moment';

const Note = (props) => {
    return ( 
        <Router>
            <div className="note-list">
                <ul>
                {props.notes.map(note =>
                    <li className="list-item" key={note.id}>
                    <Link to={`/note/${note.id}`}>{note.name}</Link>
                    <p>Modified <Moment format="DD MMM YYYY">{note.modified}</Moment></p>
                    <button className="deleteButton">Delete</button>
                    </li>
                )}
                </ul>
                <button>Add Note</button>
            </div>
        </Router>
     );
}
 
export default Note;