import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage"
import RegisterPage from './pages/RegisterPage';
export default function MyApp() 
{
    return(
        <BrowserRouter>
        <div className = "App">
            <div id = "body">
                <Routes>
                    <Route path = "/" element = {<MainPage/>} />
                    <Route path = "/RegisterPage" element = {<RegisterPage/>} />
                 </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
}