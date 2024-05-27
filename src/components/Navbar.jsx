import React from 'react'
import { Link } from 'react-router-dom';
import '../css/abc.css';
import './Navbar.css';
import logo from '../assets/images/mocsoftlogo.png';

const Navbar = () => {
    const spanStyle = {
        color: 'redye',
    fontWeight: 'bold',
    fontSize: '24px',
      };
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
     {/* <span style={spanStyle}>M</span >o<span style={spanStyle}>C</span>soft */}
     <img className='navLogo' src={logo} alt="" srcset="" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page"  to="/">
           Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/our-services">
        
           Services
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/blog">
     
           Blog
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/middle">
    
         Our Work
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/careers">
          
           Careers
          </Link>
        </li> */}
       
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/aboutus">
           About us
          </Link>
        </li>

      </ul>
      <div className="styles_contactUsButton__PX02H">
        <a
          href="/contact/"
          style={{ textDecoration: "none", color: "rgb(233, 68, 53)" }}
        >
          CONTACT US
        </a>
      </div>

    </div>
  </div>
</nav>

    
    
    
    </>
  )
}

export default Navbar