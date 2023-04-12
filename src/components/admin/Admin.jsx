import React from 'react'
import Usercard from './usercard/Usercard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://agumentikbackend.vercel.app/getalluser')
            .then((res) => {
                const data = res.data.output;
                console.log(data);
                setUsers(data);
            });
            console.log(users);
    });
    const handlesocial=(media)=>{
        alert(media)
    }
    return (
        <div className='admin'>
            <div className="users">
            {
                users.map((n) => (<Usercard key={n._id} id={n._id} name={n.name} no={n.number} email={n.email}/>))
            }
            </div>
            <div className="socialmedia">
                <div className="facebook social"><button onClick={()=>{handlesocial("facebook")}}>change facebook url</button></div>
                <div className="insta social"><button onClick={()=>{handlesocial("insta")}}>change facebook url</button></div>
                <div className="linkedin social"><button onClick={()=>{handlesocial("linkedin")}}>change facebook url</button></div>
            </div>
        </div>
    )
}

export default Admin