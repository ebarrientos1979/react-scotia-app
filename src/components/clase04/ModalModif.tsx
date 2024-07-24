import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Cliente } from './model/cliente';
import axios from 'axios';
import ListarClientes from './ListarClientes';

type Props = {
    cliente: Cliente, 
    indice:number,
    indiceSel:number
}

const ModalModif = (props: Props) => {
  const [show, setShow] = useState(false);
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);

  const saveCliente = () => {
    const fechaActual = new Date();
    const cliente:Cliente = {
      clienteId: props.cliente.clienteId,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      email: email,
      fechaRegistro: fechaActual,
      cuentas: props.cliente.cuentas,
    }
    
    
    axios.post("http://localhost:8089/v1/cliente/save", cliente,
      {            
        headers: { Authorization: `Bearer ${ localStorage.getItem("tokenAcces") }` }
      })
      .then(
        res => console.log(res)
      );
  };

  useEffect(() => {
    if (props.indice == props.indiceSel){
        setShow(true)
        setNombre(props.cliente.nombre)
        setDireccion(props.cliente.direccion)
        setTelefono(props.cliente.telefono)
        setEmail(props.cliente.email)
    }
    //props.flagShow
  }, []);

  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="Nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={ (evento) => setNombre(evento.target.value) }
                            />
            </Form.Group>
            <Form.Group controlId="Direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Dirección"
                                value={direccion}
                                onChange={ (evento) => setDireccion(evento.target.value) }
                            />
            </Form.Group>
            <Form.Group controlId="Telefono">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Telefono"
                                value={telefono}
                                onChange={ (evento) => setTelefono(evento.target.value) }
                            />
            </Form.Group>
            <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={ (evento) => setEmail(evento.target.value) }
                            />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={saveCliente}>
            Grabar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalModif; 	 