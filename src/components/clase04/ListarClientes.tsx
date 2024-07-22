import React from 'react'
import { Table, Button } from 'react-bootstrap'

type Props = {}

const ListarClientes = (props: Props) => {
    


  return (
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
        </thead>
    </Table>
  )
}

export default ListarClientes;
