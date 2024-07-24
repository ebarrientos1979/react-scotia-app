import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Cliente } from './model/cliente'
import ModalConsulta from './ModalConsulta'
import ModalModif from './ModalModif'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

type Props = {}


const ListarClientes = (props: Props) => {
  const [token, setToken] = useState<string>("");
  const [lista, setLista] = useState<Cliente[]>([]);
  const [config, setConfig] = useState({});  
  const [indiceSel, setIndiceSel] = useState(-1);
  const [inputValue, setInputValue] = useState('')
  const MySwal = withReactContent(Swal);

  const cargarToken = useCallback(() => {
    // Esto debería de cargar desde el LocalStorage
    const token = localStorage.getItem("tokenAcces");
    if(token) {
      setToken(token);
      setConfig({            
        headers: { Authorization: `Bearer ${ token }` }
      });
    }
  }, []);

  useEffect(() => {
    
    cargarToken();
    axios.get('http://localhost:8089/v1/cliente/listar', config)
      .then((res)=> {        
        setLista(res.data);
      })
      .catch((error) => {console.error(error)})
      .finally(()=>{console.log("TERMINADO")});
  }, [cargarToken]);
  

  //const eliminarCliente = (event:any) => {
  const eliminarCliente = (event:any, dato:Cliente) => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Código para eliminar
        cargarToken;
    
        axios.delete('http://localhost:8089/v1/cliente/delete/' + dato.clienteId, config)
        .then(
          (res) => {
            console.log(res);
          }
        ).catch(error => {
          if(error.response.status == 400){
            MySwal.fire("Error", error.response.data)
          }          
        });
        MySwal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire('Cancelado', 'El elemento está seguro :)', 'error');
      }
    });
  };

  const modificarCliente = (event:any, dato:Cliente, indice:number) => {
    
    setIndiceSel(event.target.id);
    
  }

  const handleDelete = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Código para eliminar
        MySwal.fire('Eliminado!', 'El elemento ha sido eliminado.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire('Cancelado', 'El elemento está seguro :)', 'error');
      }
    });
  };


  return (
    <>      
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Fecha Registro</th>
            <th>Acciones</th>
          </tr>  
        </thead>
        <tbody>
          {
            lista.map((dato, indice) => (
              <tr key={indice}>
                <td>{dato.clienteId}</td>                    
                <td>{dato.nombre}</td>                    
                <td>{dato.direccion}</td>                    
                <td>{dato.telefono}</td>                    
                <td>{dato.email}</td>     
                <td>{dato.fechaRegistro.toString()}</td>                                      
                <td>
                  <Button variant="primary" id={indice.toString()} onClick={(event) => modificarCliente(event, dato, indice)}>M</Button>
                  {
                    indice == indiceSel &&
                    <ModalModif indice={indice} indiceSel={indiceSel} cliente={dato}/>    
                  }     
                  {' '}             
                  <Button variant="danger" onClick={(event) => eliminarCliente(event, dato)}>E</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <ModalConsulta/>
    </>    
  )
}

export default ListarClientes;