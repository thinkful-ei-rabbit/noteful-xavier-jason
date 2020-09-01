import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const NoteCard = (props) => {
  return ( 
    <section>
      <div>
      {props.notes.filter(note => note.id === props.match.params.noteId)
        .map(note =>
          <>
            <li className="list-item" key={note.id}>
            <Link to={`/Note/${note.id}`}>{note.name}</Link>
            <p>Modified <Moment format="DD MMM YYYY">{note.modified}</Moment></p>
            <button className="deleteButton" >Delete</button>
            </li>
            <p>{note.content}</p>
          </>
            )}
      </div>
    </section>
   );
}
 
export default NoteCard;