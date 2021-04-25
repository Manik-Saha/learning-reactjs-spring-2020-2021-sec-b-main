import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './UserData.js';
import {User} from './components/User.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AddUserForm} from './components/AddUserForm.js';

export const myname = (name)=>{ 
  alert(name);
}

function UserList(){
  return(
    <Router>
      <Switch>
      <Route path='/'>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>           
          <AddUserForm></AddUserForm>
              </td>
              <td>
              <div>
      { 
            users.map((user, index)=>{
              return <User key={index} {...user} />
            })
      }
    </div>
              </td>
            </tr>
          </tbody>
        </table>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<UserList />, document.getElementById('root'));