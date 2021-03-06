import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from '../../../../../../index'
import Cards from '../../Cards'
import 'bootstrap/dist/css/bootstrap.min.css';

import Shirt_3 from '../images/Shirt_3.jpg'
import './Img.css'


import { Container, Row, Col,} from 'reactstrap';

import {  MDBView,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,MDBCloseIcon,MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';


//route

import{Route,Switch, Link } from 'react-router-dom'


function App(){
  

  const[Menu6,setMenu6]= useState([4])
  
  const[name,setName] = useState('')

  const[text,settext] = useState('')

  const[countNP,setcountNP] = useState(firebase.firestore.FieldValue.increment(1))


  useEffect(() =>{
    NPData()
  },[])

  const NPData = () => {
    firestore.collection("Menu3").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let myMenu6 =snapshot.docs.map( d => {
        const {name,text,countNP,} = d.data()
        console.log(name,text,countNP)
        return{name,text,countNP}
      })
      setMenu6(myMenu6)
    })
  } 


  const addNP  = () => {
    firestore.collection("Menu3").doc("Shirt_3").set({name,text,countNP},{ merge: true });

  }



const deleteNP = () =>{
  firestore.collection("Menu3").doc("Shirt_3").delete()

}




return (
        <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard>
        <MDBCardImage className="img-fluid" src={Shirt_3}  />
            <MDBCardBody>
            <MDBCardTitle>Shirt_3: 340$</MDBCardTitle>
            <Row>
              <Col>
              <Link class="btn btn-success btn-sm" onClick={addNP}>Add menu</Link>
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

