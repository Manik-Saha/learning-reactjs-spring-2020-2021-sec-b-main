import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <Link to='/'>Home</Link> | | 
            <Link to='/add'>Add event</Link> | |
            <Link to='/view_event'>view Event</Link>
        </div>
    );  
}
export default Navbar;