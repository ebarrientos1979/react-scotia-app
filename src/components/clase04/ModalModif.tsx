import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cliente } from './model/cliente';

type Props = {
    flagShow: boolean,
    cliente: Cliente
}

const ModalModif = (props: Props) => {
  const [show, setShow] = useState(props.flagShow);
  const handleClose = () => setShow(false);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="Nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                
                            />
            </Form.Group>
            <Form.Group controlId="Direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dirección"
                                
                            />
            </Form.Group>
            <Form.Group controlId="Telefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono"
                                
                            />
            </Form.Group>
            <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                
                            />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalModif; 	 