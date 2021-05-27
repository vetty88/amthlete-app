import React from 'react';
import { auth } from "../actions/authActions"
// import {withRouter} from "react-router-dom/";

export const Logout = props => {
    return (
    <div>
        <h1>App layout</h1>
        <button 
            onClick= {() => {
                auth.logout(() => {
                    props.history.push("/");
                });
            }}
        >
        Logout
        </button>
        </div>
    );
};