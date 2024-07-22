import axios from 'axios'
import { useCallback, useState } from 'react';


const GetService:React.FC = () => {
    const [datos, setDatos] = useState<any[]>([]);


    const ms = useCallback((evento:any) => {            
        axios.get('https://xsun.sunfruits.com.pe:9875/formulario/v1/getAllCollection').
        then(res=> {                      
            console.log(res.data);
            setDatos(res.data);
        }).
        catch(
            error=>{
                console.error(error);
            }
        ).finally(
            () => {
                console.log("PARA BIEN O PARA MAL SE TERMINO LA LLAMADA");
            }
        )
    }, []);
        

  return (
    <div>
        <button className='btn bnt-primary mb-3' onClick={ ms }>Obtener Llamado</button>
        <ol>
            { 
            datos.map((dato, index) => (
                <li key={index}>{ dato }</li>
            ))
            };

        </ol>
    </div>
    
  )
}

export default GetService;
