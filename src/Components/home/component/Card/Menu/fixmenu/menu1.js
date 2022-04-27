import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';


import Shirt_1 from './Shirt_1'
import Shirt_2 from './Shirt_2'
import Shirt_3 from './Shirt_3'
import Shirt_4 from './Shirt_4'
import Shirt_5 from './Shirt_5'
import Shirt_6 from './Shirt_6'

import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'



function App(){
  

return (
      <MDBContainer>
      <MDBCarousel 
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"

      >
          <MDBCarouselItem itemId="1">

            <br/>
            <Row>
              <Shirt_1/>
              <Shirt_2/>
              <Shirt_3/>
            </Row>
            <br/>
            <Row>
              <Shirt_4/>
              <Shirt_5/>
              <Shirt_6/>
            </Row>
          </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
    );
}

export default App;


