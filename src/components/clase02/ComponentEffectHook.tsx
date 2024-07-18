import React, {useState, useEffect} from "react";
import { debounce } from "lodash";
import { LISTA_USUARIO } from "../constantes/constantes";

const ComponentEffectHook:React.FC = () => {
    const [valorBusqueda, setValorBusqueda] = useState<string>('');
    const [resultados, setResultados] = useState<string[]>([]);

    const buscarDatos = debounce((texto:string) => {
        setResultados(
            LISTA_USUARIO.usuarios.filter(usuario => usuario.nombre.
                toLowerCase().indexOf(texto.toLowerCase()) > -1)
            .map(usuario => usuario.nombre)
        );
    }, 100, {leading:true, trailing:true});

    useEffect(()=>{
        if(!valorBusqueda){
            setResultados([]);
            return;
        }

        const fetchResultados = async () => {
          try{
            buscarDatos(valorBusqueda);
          }catch(error){
            console.log("Error al intentar cargar los datos: ", error);
          }
        };

        fetchResultados();
    }, [valorBusqueda] );

    const manejoCambioValor = (evento:React.ChangeEvent<HTMLInputElement>) => {
        setValorBusqueda(evento.target.value);
    };

    return (
        <div className="container">
            <h2>Buscar Usuarios</h2>
            <div className="mb-3">
                <input type="text" value={valorBusqueda} 
                onChange={manejoCambioValor} placeholder="Buscar..."/>
            </div>
            <ul>
                {resultados.map((resultado, index) => (
                    <li key={index}>{resultado}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentEffectHook;