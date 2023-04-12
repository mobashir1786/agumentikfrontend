import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import image from '../../material/image3d.png'

function Home() {
  return (
    <div className='home'>
      <div className="hometop">
        <div className="hometopleft">
          <div className="hometopleftdiscover">Discover, and collect. extraordinary <span>Monster</span> NFTs</div>
          <div className="hometopleftbuy">Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</div>
          <ul className="hometopleftbtn">
            <li><Link className='hometopleftloginbtn' to="/login">Sign In</Link></li>
            <li><Link className='hometopleftsignupbtn' to="/signup">Signup</Link></li>
          </ul>
          <div className="hometopleftquentity">
            <div className="quentityall"><div className='quentity'>35k+</div><div>Artworks</div></div>
            <div className="quentityall"><div className='quentity'>15k+</div><div>Auctions</div></div>
            <div className="quentityall"><div className='quentity'>25k+</div><div>Artists</div></div>
          </div>
        </div>
        <div className="hometopright">
          {/* <img src={image} alt="Loading..." /> */}
          <img src={image} alt="loading..." />
        </div>
      </div>
      <div className="homemiddle">
        <div className="homemiddlecontent">
          <div className="homemiddlecontenticon material-symbols-outlined">account_balance_wallet</div>
          <div className="homemiddlecontenttitle">Set Up your Wallet</div>
          <div className="homemiddlecontenttext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
        <div className="homemiddlecontent">
          <div className="homemiddlecontenticon material-symbols-outlined">account_balance_wallet</div>
          <div className="homemiddlecontenttitle">Set Up your Wallet</div>
          <div className="homemiddlecontenttext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
        <div className="homemiddlecontent">
          <div className="homemiddlecontenticon material-symbols-outlined">account_balance_wallet</div>
          <div className="homemiddlecontenttitle">Set Up your Wallet</div>
          <div className="homemiddlecontenttext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
        <div className="homemiddlecontent">
          <div className="homemiddlecontenticon material-symbols-outlined">account_balance_wallet</div>
          <div className="homemiddlecontenttitle">Set Up your Wallet</div>
          <div className="homemiddlecontenttext">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
        </div>
      </div>
    </div>
  )
}

export default Home;