import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Shirt_1 from '../images/Shirt_1.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'
import Menu from '../Menu';


function App(){
  

  const[Menu5,setMenu5]= useState([3])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countF,setcountF] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    SukiData()
  },[])

  const SukiData = () => {
    firestore.collection("Menu5").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu5 =snapshot.docs.map( d => {
        const {name,text,countF,} = d.data()
        console.log(name,text,countF)
        return{name,text,countF}
      })
      setMenu5(myMenu5)
    })
  } 


  const addfirerice  = () => {
    firestore.collection("Menu1").doc("Shirt1").set({name,text,countF},{ merge: true });

  }



const deleteSuki = () =>{
  firestore.collection("Menu1").doc("Shirt1").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={Shirt_1}  />
            <MDBCardBody>
            <MDBCardTitle>Shirt_1 : 300$</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addfirerice}>Add menu</Link>
              </Col>
            </Row>           
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

            <div>
        
            </div>
        </div>

    );
}

export default App;

