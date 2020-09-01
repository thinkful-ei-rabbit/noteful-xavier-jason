import React from 'react';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';
import moment from 'react-moment';

const Note = (props) => {
    return ( 
        <Router>
            <div className="note-list">
                <ul>
                {props.notes.map(note =>
                    <li className="list-item" key={note.id}>
                    <Link to={`/Note/${note.id}`}>{note.name}</Link>
                    <p><Moment format="MM/DD/YY">{note.modified}</Moment></p>
                    <button></button>
                    </li>
                )}
                </ul>
                <button>Add Note</button>
            </div>
        </Router>
     );
}
 
export default Note;