import React, { useContext } from "react";
import { UserContext } from "../UserContext";
export function About(){
    const {user} = useContext(UserContext);
    return(
        <div>
            <h2>Index</h2>
            Welcome to Index!!
            <pre>{JSON.stringify(user,null,2)}</pre>
        </div>

    )
}