import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Cliente } from './model/cliente'

type Props = {}

const ListarClientes = (props: Props) => {
  const [token, setToken] = useState<string>("");
  const [lista, setLista] = useState<Cliente[]>([]);

  const cargarDatos = useCallback(()=>{
    setToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm9uaW1vQGdtYWlsLmNvbSIsImlhdCI6MTcyMTY5MDI4OSwiZXhwIjoxNzIxNjkxNDg5fQ.tTfjps3Fe451EEktFrzYevrzl9Qt7SHGiYIEbf50qmw");
    const config = {            
      headers: { Authorization: `Bearer ${ token }` }
    }

    axios.get('http://localhost:8089/v1/cliente/listarClientes', config)
      .then((res)=> {        
        setLista(res.data);
      })
      .catch((error) => {console.error(error)})
      .finally(()=>{console.log("TERMINADO")});
  }, [token]);

  


  return (
    <>
      <Button onClick={cargarDatos}  variant="primary" className="w-100">Cargar Datos</Button>
      <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>fecha Registro</th>
                <th>Acciones</th>                
            </tr>            
            {
              lista.map((dato, indice) => (
                <tr>
                  <td>{dato.clienteId}</td>                    
                  <td>{dato.nombre}</td>                    
                  <td>{dato.direccion}</td>                    
                  <td>{dato.telefono}</td>                    
                  <td>{dato.email}</td>     
                  <td>{dato.fechaRegistro.toString()}</td>                                      
                  <td>
                    <Button variant="primary">M</Button>{ ' '}
                    <Button variant="danger">E</Button>
                  </td>
                </tr>
              ))
            };
        </thead>
      </Table>
    </>    
  )
}

export default ListarClientes;
