import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'

function OrderCompleteModal({ location }) {
  const [modal, setCompleteModal] = useState(false)
  const [name, setName] = useState('')
  const [pizzaSize, setPizzaSize] = useState(12)
  const [sauce, setSauce] = useState('')
  const [instructions, setInstructions] = useState('')
  const [toppings, setToppings] = useState([])
  const [isGlutenFree, setGlutenFree] = useState(false)

  useEffect(() => {
    axios.post('https://reqres.in/api/users', {
      name: name,
      pizzaSize: pizzaSize,
      sauce: sauce,
      instructions: instructions
    })
    .then((res) => console.log(res.data))

    setToppings(location.state.toppings)
    setCompleteModal(location.state.modal)
    setInstructions(location.state.instructions)
    setSauce(location.state.sauce)
    setPizzaSize(location.state.pizzaSize)
    setName(location.state.name)
    setGlutenFree(location.state.isGlutenFree)
  }, [instructions, location.state, name, pizzaSize, sauce])

  return(
    <>
      <Modal isOpen={modal}>
        <ModalBody>
          Congratulations {name}, Your Pizza is being made!<br />
          Your pizza is {pizzaSize} inches, has {sauce ? sauce === 'BBQ Sauce' ? 'BBQ' : sauce : "no"} Sauce, and the following toppings: 
          <ul>
          {toppings.map(topping => 
            <li>{topping}</li>
          )}
          </ul>
          {instructions 
          ? `Your special instructions were: ${<br />}${instructions}`
          : `You had no special instructions`
          }<br />
          {isGlutenFree ? "And yes, it is gluten free." : "And no, it isn't gluten free"}
          {console.log()}
        </ModalBody>
        <ModalFooter>
          <Link to="/"><Button color="danger">Close</Button></Link>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default OrderCompleteModal