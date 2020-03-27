import React from 'react'
import OrderModal from './OrderModal'
import '../App.css'
import { Button } from 'reactstrap'
import { Link, Route } from 'react-router-dom'


function MainCarousel() {
  return (
    <div className="carousel-div">
      <h1> Your favorite food, delivered while coding </h1>
      <Link to={{pathname: "/pizza", state:{modal: true}}}><Button className="btn-md-width" name="order-btn" color="danger">Pizza?</Button></Link>
      <Route path="/pizza" component={OrderModal} />
    </div>
  )
}

export default MainCarousel