import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  let [eye, setEye] = useState("show");
  let [passText, setPassText] = useState("password");
  const handleLogin = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const password = e.target[1].value;
    console.log(id, password)
    axios.post("https://agumentikbackend.vercel.app/login", { email: id, password: password })
      .then(res => {
        console.log(res)
        if (res.data.key === 1) {
          document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
          if (res.data.userData.user === "admin") {
            window.location.href = 'http://localhost:3000/admin'
          }
          else {
            alert(`thank you for login ${res.data.userData.name}`);
          }

        } else {
          alert(res.data.message);
        }
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
            <form onSubmit={handleLogin}>
              <input type="text" placeholder='Enter Your ID' /><br /><br />
              <input type={passText} placeholder='Enter Your Password' />
              <span onClick={showhide} className='eyeicon'>{eye}</span><br /> <br />
              <button type='submit' className='loginbtn'>SIGN IN</button><br />
            </form>
          </div><br />
          <div className="newuser">
            <div className="dontHaveAcc">Don't have an account yet?</div>
            <Link to="/signup"><span className='createaccount'>Create an account</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;