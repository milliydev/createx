import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
function header() {
  return (
      <header>
      <Container className = "container">
          <nav>
            <div className="logo"></div>
            <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Contacts</li>
            </ul>
            <button className='get'>Get consultation</button>
            <div className='login'>
            <i class="bi bi-person"></i>
            <p className='login-form'>Log in / Register</p>
            </div>
          </nav>

          <div className="header-main">
            <div className="play-showrel">
              <div className="img-showrel"></div>
              <text className="showreel-text">Play showreel</text>
            </div>
            <div className="enjoy-text">Enjoy studying with Createx Online Courses</div>
            <button className='about'>About us</button>
            <button className='Explore'>Explore courses</button>
            <div className="header-img"></div>
            <div className="static-grid">
              <div className="item-1">
                <h1>1200</h1>
                <p>Students graduated</p>
                <div className="dot1"></div>
              </div>
              <div className="item-2">
              <h1>1200</h1>
              <p>Completed courses</p>
              <div className="dot2"></div>
              

              </div>
              <div className="item-3">
              <h1>16</h1>
              <p>Qualified tutors</p>
              <div className="dot3"></div>


              </div>
              <div className="item-4">
              <h1>5</h1>
              <p>Years of experience</p>

              </div>
            </div>
          </div>
      </Container>
      </header>
  )
}

export default header
