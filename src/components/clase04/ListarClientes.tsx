import React, { useCallback, useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Cliente } from './model/cliente'
import ModalConsulta from './ModalConsulta'

type Props = {}

const ListarClientes = (props: Props) => {
  const [token, setToken] = useState<string>("");
  const [lista, setLista] = useState<Cliente[]>([]);
  const [config, setConfig] = useState({});  

  const cargarToken = () => {
    //Esto debería de cargar desde el LocalStorage
    setToken("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm9uaW1vQGdtYWlsLmNvbSIsImlhdCI6MTcyMTY5MjYxMywiZXhwIjoxNzIxNjkzODEzfQ.AX9axovAFEp05gjwN7lmz8yYjmQ1gh0mVTrpvmId20I");
    setConfig({            
      headers: { Authorization: `Bearer ${ token }` }
    });
  };
  

  const eliminarCliente = (event:any) => {
    console.log("ELIMINAR CLIENTE");
    cargarToken;
    axios.delete('', config);
  };

  const cargarDatos = useCallback(()=>{    
    cargarToken;
    console.log(config);
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
                    <Button variant="danger" onClick={ eliminarCliente }>E</Button>
                  </td>
                </tr>
              ))
            };
        </thead>
      </Table>
      <ModalConsulta/>
    </>    
  )
}

export default ListarClientes;
