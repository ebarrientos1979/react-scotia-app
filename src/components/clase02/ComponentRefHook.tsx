import React, {useState, useRef} from 'react'

type Props = {}

const ComponentRefHook = (props: Props) => {

    const [cuenta, setCuenta] = useState<number>(0);
    const[estadoPausado, setEstadoPausado] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const empezarContador = () => {        
        setEstadoPausado(false);        
        intervalRef.current = setInterval(() => { //ms
            setCuenta( prevCuenta => prevCuenta + 1);
        }, 1000);
    };

    const pausarContador = () =>{
        setEstadoPausado(true);
        if (intervalRef.current){
            clearInterval(intervalRef.current);
        }
    };

    const reiniciarContador = () => {
        setEstadoPausado(false);
        setCuenta(0);
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
    }


  return (
    <div>
        <h2>Contador</h2>
        <p>Cuenta: {cuenta}</p>
        <div className='row'>
            <button className='btn btn-success col-4 m-2' onClick={empezarContador}>Iniciar</button>
            <button className='btn btn-warning col-4 m-2' 
                onClick={pausarContador} >Pausar</button>
            <button className='btn btn-primary col-4 m-2' 
                onClick={reiniciarContador} >Reiniciar</button>
        </div>
    </div>
  )
}
export default ComponentRefHook;