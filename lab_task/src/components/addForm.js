import {useState} from 'react';
import {useParams} from 'react-router-dom';

export function addForm(){
    return(
       <div className="addForm">
      <table>
        <thead></thead>
        <tbody>
          <tr>
          <td>Pick a date :</td>
          <td><input type="date" name="date"></input></td>
          </tr>
          <tr>
          <td>Add an event or memories :</td>
          <td><input type="text" name="event"></input></td>
          </tr>
        </tbody>
      </table>
       </div> 
    )
}
export default addForm;