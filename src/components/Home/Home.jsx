import React from 'react'
import MenuBar from '../MenuBar/MenuBar';

import VideosList from '../VideosList/VideosList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "./Home.css";

export default function Home() {
   
  return (
    <div>
      <Container className='homepage'>
   <Row className='menubar'>
    <Col>
    <MenuBar/>
    </Col>
   </Row>
  
      <Row >
      
        <Col className='videoslist' ><VideosList/></Col>
      </Row>
    </Container>
  </div>
  );
}
