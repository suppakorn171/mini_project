import React, { useEffect , useState} from 'react';
import{useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';
import HeaderSection from '../HeaderSection';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';



//firebase
import firebase from 'firebase';
import {firestore} from '../../../../index'



import Showcard from '../Card/ShowCard'
import{Route,Switch, Link } from 'react-router-dom'

import './TotalMenu.css'


function TotalPage() {

  const deleteTable1 = (id) =>{

  }

return (
  <body class='container-fluid bg-dark '>
  <br/>
  <div>
  </div>
  <br/>
  <br/>
  <br/>
  <Showcard/>
  <br/>
  <br/>
  <br/>
  <br/>

  </body>
  
    );
}

export default TotalPage;
