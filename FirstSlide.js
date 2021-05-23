import React from 'react'
import { Carousel } from 'react-bootstrap';
//import {Header} from './Header';



export default function FirstSlide(props) {
   return (
     <div>
        
       <switch>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_9649095.htm"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=""
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=""
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </switch>
  </div>
    )

    
}

