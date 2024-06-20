import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './Maintwo.css'
import img from '../image/image.svg';
function MainTwo() {
  return (
    <div>
      <div className="MainTwo">
        <Container className='container'>
          <div className="Our-text">Our Events</div>
          <div className="lectures">Lectures & workshops</div>
          <div className="grid-containerStatic">
            <div className="item-1">
              <div className="day">05</div>
              <div className="month">August</div>
              <div className="date">11:00 – 14:00</div>
              <p className='formating'>Formation of the organizational structure of the company in the face of uncertainty</p>
              <p className='online'>Onine master-class</p>
              <button>View more</button>
            </div>
            <div className="item-2">
              <div className="day">24</div>
              <div className="month">July</div>
              <div className="date">11:00 – 14:00</div>
              <p className='formating'>Formation of the organizational structure of the company in the face of uncertainty</p>
              <p className='online'>Onine master-class</p>
              <button>View more</button>
            </div>
            <div className="item-3">
              <div className="day">16</div>
              <div className="month">July</div>
              <div className="date">11:00 – 14:00</div>
              <p className='formating'>Formation of the organizational structure of the company in the face of uncertainty</p>
              <p className='online'>Onine master-class</p>
              <button>View more</button>
              <div className="do-you">Do you want more?</div>
              <div className="btn-explore">Explore all events</div>
            </div>
          </div>

          <div className="Certificate">
            <div className="createx-certifecat">Createx Certificate</div>
            <h1 className='your'>Your expertise will be confirmed</h1>
            <p className='weAre'>We are accredited by international professional organizations and institutes:</p>
            <div className="img-del"></div>
            <div className="img-sentinal"></div>
            <div className="img-national"></div>
            <img src={img} className='img-certificate' />


          </div>

          <div className="Slider">

          </div>
        </Container>


        <div className="team">
          <Container>
            <h6 className='best-text'>Best tutors are all here</h6>
            <h6 className='met-text'>Meet our team</h6>
            <div className="grid-cards">
              <div className="item-1">
                <div className="bg"></div>
                <div className="img"></div>
                <p>Dianne Russell</p>
                <h5>Founder and CEO</h5>

              </div>
              <div className="item-2">
                <div className="img"></div>
                <p>Dianne Russell</p>
                <h5>Founder and CEO</h5>
              </div>
              <div className="item-3">
                <div className="img"></div>
                <p>Dianne Russell</p>
                <h5>Founder and CEO</h5>
              </div>
              <div className="item-4">
                <div className="img"></div>
                <p>Dianne Russell</p>
                <h5>Founder and CEO</h5>
              </div>
            </div>
          </Container>
        </div>

      </div>
    </div>
  )
}

export default MainTwo
