import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import LiveAction from './pages/liveaction/LiveAction';
import About from './pages/about/About';
import Community from './pages/community/Community';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Admin from './components/admin/Admin';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/liveaction' element={<LiveAction />} />
          <Route path='/about' element={<About />} />
          <Route path='/community' element={<Community />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
