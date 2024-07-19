import React from 'react'
import { UsuarioDummy } from '../constantes/constantes'
import useAuthentication from './useAuthentication'

type Props = {}

const ComponentCustomized = (props: Props) => {

    const [estadoAutenticacion, login, logout] = useAuthentication();


  return (
    <div>
        {estadoAutenticacion.estaAutenticado ? (
            <div>
                <p>Binevenido, {estadoAutenticacion.usuario?.nombre}</p>
                <button className='btn btn-secondary' 
                    onClick={() => {logout();}}>Cerrar Sesión</button>
            </div>    
        )
        :(
            <div>
                <p>Iniciar Sesión para Continuar</p>
                <button className='btn btn-primary'
                    onClick={() => {login(UsuarioDummy)}}>Iniciar Sesión</button>
            </div>        
        )}
    </div>
  )
}

export default ComponentCustomized;