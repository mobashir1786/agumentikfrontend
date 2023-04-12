import React from 'react';
import './footer.css'
import FooterSocial from './FooterSocial';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Footer() {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    axios.get('https://agumentikbackend.vercel.app/getallurl')
      .then((res) => {
        const data = res.data.output;
        // console.log(data);
        setUrl(data);
      });
  }, []);
  return (
    <div className='footer'>
      <div className="footerimages">
        {
          url.map((n) => (<FooterSocial key={n._id} id={n._id} name={n.name} url={n.url} />))
        }
      </div>

    </div>
  )
}

export default Footer