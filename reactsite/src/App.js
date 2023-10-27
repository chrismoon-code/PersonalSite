import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage"
export default function MyApp() 
{
    return(
        <BrowserRouter>
        <div className = "App">
            <div id = "body">
                <Routes>
                    <Route path = "/" element = {<MainPage/>} />
                 </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}