import React from 'react'
import '../App.css'
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

function RestaurantCard(props) {
  return (
    <>
      <Card className="border-override">
        <CardBody>
          <CardTitle><b>{props.name}</b></CardTitle>
          <CardSubtitle>{props.info}</CardSubtitle>
          <Badge href="#" color="primary">{(props.deliveryTime ? props.deliveryTime : "40-50") + " Min"}</Badge>{' '}
          <Badge href="#" color="success">{(props.deliveryFee ? props.deliveryFee : "$4.99") + " Delivery Fee"}</Badge><br />
          <Button size="sm" color="danger" block>Order Now</Button>
        </CardBody>
      </Card>
    </>
  )
}

export default RestaurantCard