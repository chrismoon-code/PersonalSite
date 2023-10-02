import "../styles/MainPage.css";
import {useEffect, useState} from "react";
export default function MainPage()
{
    const [color]=useState('darkslateblue');
    const [Textcolor]=useState('lightsteelblue');
    const [users,setUsers] = useState('');
useEffect(() => {
})
async function loginCheck()
{

}
return (
    <div className="App">
    <head>
    <title> Christopher Moon </title>
    </head>
    <body> 
    <header class ="main-header">
    <h1 class = "name name-large"> 
    Christopher Moon 
    </h1>
    <fieldset className = "loginInfo"> 
    <input className="loginEmail"  type="text" id="username" placeholder="Email"/>
    <input className="loginPassword" type="text" id="password" placeholder="Password"/>
    </fieldset>
    <div className = "personalInfo">
        Personal Contact:&#160;647 636 3712 
        <br/> My Email:&#160;christopher.moon2008@gmail.com
    </div>
    <div class = "LoginButton">
    <button onClick ={() => loginCheck()} style = {{background: color, color: Textcolor}}> 
    Login 
    </button>
    </div>
    <div class = "MoveRegisterSite">
    <a href = "/RegisterPage">
    <button style = {{background: color, color: Textcolor}}> Register </button>
    </a>
    </div>
    <div className = "underline">
    </div>   
    </header>
<section class = "personal-summary container">
    <h5 class = "about"> ABOUT </h5>
    <img class = "portrait" src = {require("../styles/images/me.jpg")}>
    </img>
    <p>
    &emsp; Welcome to my website. I am a recent graduate from York University in Software Engineering. I am looking to start my career in the field of
    software/website development and refine and add onto the skills that i've obtained from my university studies.
    </p>
</section>
<footer class = "main-footer">
    <div class = "container main-footer-container">
        <h6 class = "name"> Relevant Websites </h6>
        <ul class = "nav">
            <li> 
                <a href = "https://github.com/chrismoon-code?tab=repositories"> 
                    <img src = {require("../styles/images/githublogo.png")} height = "100px" width = "100px"></img> 
                </a>
            </li>
            <li class = "linkedin">
                <a href = "https://www.linkedin.com/in/christopher-moon-55b076239/"> 
                    <img src = {require("../styles/images/Linkedin-Logo.png")} height = "100px" width = "175px"></img> 
                </a>
            </li>
        </ul>
    </div>
</footer>
</body>
</div>
);
}