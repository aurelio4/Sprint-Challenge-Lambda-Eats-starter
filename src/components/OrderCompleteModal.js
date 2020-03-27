import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label
} from 'reactstrap'

function OrderCompleteModal({ location }) {
  const [modal, setCompleteModal] = useState(false)

  useEffect(() => {
    console.log(location.state.modal)
    setCompleteModal(location.state.modal)
  }, [location.state.modal])

  return(
    <>
      <Modal isOpen={modal}>
        <ModalBody>
          Congratulations!
        </ModalBody>
        <ModalFooter>
          <Link to="/"><Button color="danger">Close</Button></Link>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default OrderCompleteModal