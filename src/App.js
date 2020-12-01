
import './App.css';
import React, { useContext, useState} from "react";
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {UserContext} from './UserContext';
import { Index } from './pages/index';
import { About } from './pages/about';

export default function App() {
//initializing the state variable with null
const [user,setUser] = useState('null');
//persisting data on refreshing the page
React.useEffect(()=>{
  const data = localStorage.getItem('my_user');
  if(data){
    setUser(JSON.parse(data));
  }
},[])
React.useEffect(()=>{
   localStorage.setItem('my_user',JSON.stringify(user));
 })
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{user,setUser}}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
        
      </div>
    </Router>
  );
}