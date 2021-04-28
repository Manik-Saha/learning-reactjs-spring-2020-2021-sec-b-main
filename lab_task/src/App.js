import './App.css';
import {useState} from 'react'; 
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import addForm from './components/addForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
<Router>	
				<NavBar /> 
			<Switch>
				<Route exact path='/'>
					<h1>Welcome To Online Diary!</h1>
				</Route>

				<Route path='/add'>
          <addForm />
				</Route>

				<Route path='/view_event'>

				</Route>
				<Route path='/edit/:id'>

        </Route>
				<Route path='*'> <h1>404 not found</h1></Route>
			</Switch>
			
		</Router>
  );
}

export default App;
