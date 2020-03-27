import React from "react"
import NavBar from './components/NavBar'
import MainCarousel from './components/MainCarousel'
import RestaurantCard from './components/RestaurantCard'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const App = () => {
  return (
    <>
      <NavBar />
      <MainCarousel />
      <div className="restaurantcard-div">
        <h2 style={{margin:'2vh 0 0 0'}}>Food Delivery in Gotham City</h2>
        <Container>
          <Row>
            <Col xs="6" sm="4"><RestaurantCard name={"McDonald's"} info={"$ - American - Fast Food - Burgers"} deliveryTime={"20-30"} deliveryFee={"$5.99"} /></Col>
            <Col xs="6" sm="4"><RestaurantCard name={"sweetgreen"} info={"$ - Healthy - Salads"} deliveryTime={"30-45"} deliveryFee={"$4.99"} /></Col>
            <Col xs="6" sm="4"><RestaurantCard name={"Starbucks"} info={"$ - Cafe - Coffee & Tea - Breakfast and Brunch"} deliveryTime={"10-20"} deliveryFee={"$3.99"}/></Col>
          </Row>
          <Row>
            <Col xs="6" sm="4"><RestaurantCard name={"Wendy's"} info={"$ - American - Fast Food - Burgers"} deliveryTime={"20-30"} deliveryFee={"$3.99"} /></Col>
            <Col xs="6" sm="4"><RestaurantCard name={"Burger King"} info={"$ - American - Fast Food - Burgers"} deliveryTime={"20-30"} deliveryFee={"$3.99"} /></Col>
            <Col xs="6" sm="4"><RestaurantCard name={"Outback Steakhouse"} info={"$$ - Australian - Steak"} deliveryTime={"20-30"} deliveryFee={"$5.99"} /></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default App;
