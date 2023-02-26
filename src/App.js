import auth from './firebase';
import {useState} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home'
import Login from './Login';

const App = () => {
	return ( 
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<Home/>}/>
				<Route path='/' element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	 );
}
 
export default App;


