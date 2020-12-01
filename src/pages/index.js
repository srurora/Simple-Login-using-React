import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import {login} from '../utils/login';

export function Index() {
    const {user,setUser} = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      Welcome Home!
      <pre>{JSON.stringify(user,null,2)}</pre>
      {user ? (
          <button onClick = {()=>{
              setUser(null)
          }}>Logout</button>
     ) :(
         <button onClick={async ()=>{
             const user = await login()
             setUser(user)
         }}>Login</button>
     )}
      <button onClick={() => setUser("John")}>Change User</button>
    </div>
  );
}