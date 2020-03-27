import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import OrderCompleteModal from './OrderCompleteModal'
import {
  Badge,
  Button,
  CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

function OrderModal({ location }) {
  const [modal, setModal] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [quantity, setQuantity] = useState('Quantity')
  const [price, setPrice] = useState(16.99)
  const [name, setName] = useState('')
  const [pizzaSize, setPizzaSize] = useState(12)
  const [sauce, setSauce] = useState('')
  const [instructions, setInstructions] = useState('')
  const [isGlutenFree, setGlutenFree] = useState(false)
  const [toppings, setToppings] = useState([])

  const toggle = () => setDropdown(!dropdown)

  useEffect(() => {
    setModal(location.state.modal)
  }, [location.state.modal])

  return(
    <>
      <Modal isOpen={modal}>
        <ModalHeader className="modal-header-override">Build Your Own Pizza</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Build Your Own Pizza</Label>
              <Input type="text" name="name" id="name" placeholder="First Name" onChange={(e) => setName(e.target.value)} invalid={name.length < 2} valid={name.length >= 2}></Input>
              <br />

              {/* pizza size */}
              <FormGroup>
                <h4>Choice of Size</h4>
                <Badge color="danger">Required</Badge>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="pizza-size" onChange={(e) => {setPizzaSize(e.target.value)}}>
                  <option value="12">Small (12")</option>
                  <option value="14">Medium (14")</option>
                  <option value="16">Large (16")</option>
                </Input>
              </FormGroup>

              {/* Sauces */}
              <FormGroup>
                <h4>Choice of Sauce</h4>
                <Badge color="danger">Required</Badge>
              </FormGroup>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onChange={(e) => e.target.checked ? setSauce('Original Red') : setSauce('')} />
                    Original Red
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onChange={(e) => e.target.checked ? setSauce('Garlic Ranch') : setSauce('')} />
                    Garlic Ranch
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onChange={(e) => e.target.checked ? setSauce('BBQ Sauce') : setSauce('')} />
                    BBQ Sauce
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" onChange={(e) => e.target.checked ? setSauce('Spinach Alfredo') : setSauce('')} />
                    Spinach Alfredo
                  </Label>
                </FormGroup>
              </FormGroup>
              <br />

              { /* toppings */ }
              <FormGroup>
                <h4>Add Toppings</h4>
                <Badge color="primary">Choose up to 10</Badge>
              </FormGroup>
              <FormGroup>
                  <CustomInput type="checkbox" name="pepperoni" id="topping1" label="Pepperoni" onChange={() => setToppings([...toppings, 'Pepperoni'])} />
                  <CustomInput type="checkbox" name="sausage" id="topping2" label="Sausage" onChange={() => setToppings([...toppings, 'Sausage'])} />
                  <CustomInput type="checkbox" name="olives" id="topping3" label="Black Olives" onChange={() => setToppings([...toppings,'Black Olives'])} />
                  <CustomInput type="checkbox" name="bacon" id="topping4" label="Bacon" onChange={() => setToppings([...toppings,'Bacon'])} />
                  <CustomInput type="checkbox" name="ham" id="topping5" label="Ham" onChange={() => setToppings([...toppings,'Ham'])}/>
                  <CustomInput type="checkbox" name="chicken" id="topping6" label="Chicken" onChange={() => setToppings([...toppings,'Chicken'])} />
              </FormGroup>

              {/* gluten free crust substitute */}
              <FormGroup>
                <h4>Choice of Substitute</h4>
                <Badge color="primary">Choose up to 1</Badge>
              </FormGroup>
              <FormGroup>
                <CustomInput type="switch" id="glutenFreeCrust" name="glutenFreeCrust" label="Gluten Free Crust (+$1.00)" onChange={(e) => e.target.checked ? (setPrice(price + 1.00), setGlutenFree(true)): (setPrice(price - 1.00), setGlutenFree(false))} />
              </FormGroup>

              {/* special instructions */}
              <FormGroup>
                <h4>Special Instructions</h4>
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="text" id="textArea" placeholder="Anything else you'd like to add?" onChange={(e) => {setInstructions(e.target.value); console.log(instructions)}} />
              </FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
        <Dropdown isOpen={dropdown} toggle={toggle}>
          <DropdownToggle caret>
            {isNaN(quantity) ? quantity : quantity + ' $' + roundToTwo(price*quantity)}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setQuantity(1)}>1 {'($'}{price}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(2)}>2 {'($'}{roundToTwo(price*2)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(3)}>3 {'($'}{roundToTwo(price*3)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(4)}>4 {'($'}{roundToTwo(price*4)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(5)}>5 {'($'}{roundToTwo(price*5)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(6)}>6 {'($'}{roundToTwo(price*6)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(7)}>7 {'($'}{roundToTwo(price*7)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(8)}>8 {'($'}{roundToTwo(price*8)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(9)}>9 {'($'}{roundToTwo(price*9)}{')'}</DropdownItem>
            <DropdownItem onClick={() => setQuantity(10)}>10 {'($'}{roundToTwo(price*10)}{')'}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
          <Link to={{pathname: "/pizza/complete", state:{modal: true, name: name, pizzaSize: pizzaSize, sauce: sauce, instructions: instructions, toppings: [...toppings], isGlutenFree: isGlutenFree}}}><Button name="add-to-order" color="success">Add to Order</Button></Link>
          <Route path="/pizza/complete" component={OrderCompleteModal} />
          <Link to="/"><Button color="danger">Close</Button></Link>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default OrderModal