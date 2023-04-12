import React, { useState } from 'react';
import "./signup.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  let [eye, setEye] = useState("show");
  let [passText, setPassText] = useState("password");
  const handleSignup = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const number = event.target[1].value;
    const email = event.target[2].value;
    const password = event.target[3].value;

    console.log(name, number, email, password);
    axios.post("https://agumentikbackend.vercel.app/signup", { name: name, number: number, email: email, password: password })
      .then(res => {
        console.log(res)
        document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
        alert(`thank you for Register ${res.data.output.name}`);
        window.location.href = 'http://localhost:3000'
      }).catch(e => {
        console.log(e);
      })
  }
  const showhide = () => {
    if (eye === "show") {
      setEye(eye = "hide");
      setPassText(passText = "text");
    }
    else {
      setEye(eye = "show");
      setPassText(passText = "password");
    }
  }
  return (
    <div className="loginpage">
      <div className="logincontent">
        <div className="loginContentRight">
          <div className="ExistUser">
            <div className="existuserhead">
              <div className="alredyMember">ALREADY MEMBERS</div>
              <span className="needhelp">Need help?</span>
            </div><br />
            <form onSubmit={handleSignup}>
              <input type="text" placeholder='Enter Your Name' /><br />
              <input type="number" placeholder='Enter Your Number' /><br />
              <input type="text" placeholder='Enter Your ID' /><br />
              <input type={passText} placeholder='Enter Your Password' />
              <span onClick={showhide} className='eyeicon'>{eye}</span><br />
              <button type='submit' className='loginbtn'>SIGN UP</button><br />
            </form>
          </div><br />
          <div className="newuser">
            <div className="dontHaveAcc">Alredy Have An Account?</div>
            <Link to="/login"><span className='createaccount'>Sign In</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;