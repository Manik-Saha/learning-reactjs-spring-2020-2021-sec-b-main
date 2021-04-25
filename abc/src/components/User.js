import {myname} from '../index.js';

export function User(props){
    return(
      <div className="usermain">
        <h2>Name : {props.name}</h2>
        <h2>ID : {props.id}</h2>
        <h2>Email : {props.email}</h2>
        <button onClick={()=> myname(props.name)}>click me</button>
      </div>
    );
  }