export const AddUserForm = ()=>{

     return(
        <div>
        <form>
   <table>
     <thead></thead>
     <tbody>
         <tr>
             <td>Name : </td>
             <td><input type="text" name="name"/></td>
         </tr>
         <tr>
             <td>ID : </td>
             <td><input type="number" name="id"></input></td>
         </tr>
         <tr>
             <td>E-maiil : </td>
             <td><input type="text" name="email"></input></td>
         </tr>
         <input type="submit" name="submit" value="Save"></input>
         </tbody>  
    </table> 
</form>
</div>
     )
}