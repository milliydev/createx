import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import './Maintwo.css'
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
              </div>
              <div className="item-2">
              <div className="day">24</div>
              <div className="month">July</div>
              <div className="date">11:00 – 14:00</div>
              <p className='formating'>Formation of the organizational structure of the company in the face of uncertainty</p>
              <p className='online'>Onine master-class</p>
              </div>
              <div className="item-3">
              <div className="day">16</div>
              <div className="month">July</div>
              <div className="date">11:00 – 14:00</div>
              <p className='formating'>Formation of the organizational structure of the company in the face of uncertainty</p>
              <p className='online'>Onine master-class</p>
              </div>
            </div>
           </Container>
       </div>
    </div>
  )
}

export default MainTwo
