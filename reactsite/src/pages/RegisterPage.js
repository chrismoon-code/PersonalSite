import React, {useEffect, useState} from 'react';
import '../styles/RegisterPage.css';
function RegisterPage() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) =>
    {
        const{id,value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName")
        {
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "Password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }
    useEffect(() => {
    })
    async function validate(){

    }
    return(
      <div className="form">
              <div className="firstName">
                  <label className="form__label" for="firstname">First Name </label>
                  <input className="form__input" type="text" id="firstName" value = {firstName} onChange = {(e) => handleInputChange(e)} placeholder="First Name"/>
              </div>
              <div className="lastName">
                  <label className="form__label" for="lastname">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" value = {lastName} onChange = {(e) => handleInputChange(e)} />
              </div>
              <div className="Email">
                  <label className="form__label" for="email">Email </label>
                  <input  type = "email" id="email" className="form__input" placeholder="Email" value = {email} onChange = {(e) => handleInputChange(e)} />
              </div>
              <div className="Password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="Password" placeholder="Password" value = {password} onChange = {(e) => handleInputChange(e)} />
              </div>
              <div className="confirmPassword">
                  <label className="form__label" for="confirmpassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value = {confirmPassword} onChange = {(e) => handleInputChange(e)} />
              </div>
            <div class="submitButton">
              <button type="submit" class="registerButton" onClick={() => validate()}>Register</button>
            </div>
            <a href = "/">
            <button> Return to Main </button>
            </a>
            <div> {errorMessage} </div>
      </div>      
    )       

    }
export default RegisterPage;