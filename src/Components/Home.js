import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'reactstrap';



import HeaderSection from './home/component/HeaderSection';
import ShowCard from './home/component/Card/ShowCard'
import CardLink from './home/component/Card/Table/CardsLink'
import Carousel from './home/component/Card/Carousel'


import { MDBContainer, MDBRow, MDBCol,MDBFooter } from "mdbreact";


import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

/*
<p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
<img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
<button onClick={() => firebase.auth().signOut()}>Sign-out</button>*/

import TotalMenu1 from './home/component/TotalOrder/TotalMenu1'
import MenuPage from './home/component/Card/Menu/Menu'
import Table1 from './home/component/Card/Table/Table1';
import TotalOrder from './home/component/TotalOrder/TotalMenu1';


import './Home.css'

function Home() {
  return(
    <Router>
      <div>
      <HeaderSection title ='Wellcome to Shop'/>
        <Switch>
            <Route exact path="/" component={Homes} />
            <Route path="/MenuPage" component={MenuPage}/>

        </Switch>
      </div>
    </Router>
  )
  
}

const Homes =() =>(
  
      <body>
        <div class='bg-dark'>
            
          <div>
            
           <div >
             <br/>

              <Container>
                <Row>
                  <Table1/>
               </Row>
             </Container>

             <br/>
           </div>
            
             <br/>
            </div>

        </div>
      </body>
);




export default Home;

