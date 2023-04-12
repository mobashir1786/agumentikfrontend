import React from 'react';
import './usercard.css';
import axios from 'axios';

function Usercard(props) {
    const handleadmin=()=>{
        axios.post('https://agumentikbackend.vercel.app/updateuser',{_id:props.id})
            .then((res) => {
                // console.log(res.data.output.user);
                alert("user is admin now")
            });
        // alert("done")
    }
  return (
    <div className='usercard'>
        <h1 className="name">Name: {props.name}</h1>
        <div className="number">Number: {props.no}</div>
        <div className="email">Email: {props.email}</div>
        <button onClick={handleadmin}>make admin</button>
    </div>
  )
}

export default Usercard