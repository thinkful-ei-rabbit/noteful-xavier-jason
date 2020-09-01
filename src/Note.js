import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const Note = (props) => {
    return ( 
            <div className="note-list">
                <ul>
                {props.location.pathname === '/' ? props.notes.map(note => 
                    <li className="list-item" key={note.id}>
                    <Link to={`/Note/${note.id}`}>{note.name}</Link>
                    <p>Modified <Moment format="DD MMM YYYY">{note.modified}</Moment></p>
                    <button className="deleteButton" >Delete</button>
                    </li>
                ) : props.notes.filter(note => note.folderId === props.match.params.folderId)
                .map(note =>
                    <li className="list-item" key={note.id}>
                    <Link to={`/Note/${note.id}`}>{note.name}</Link>
                    <p>Modified <Moment format="DD MMM YYYY">{note.modified}</Moment></p>
                    <button className="deleteButton" >Delete</button>
                    </li>
                    )}
                </ul>
                <button>Add Note</button>
            </div>
     );
}
 
export default Note;