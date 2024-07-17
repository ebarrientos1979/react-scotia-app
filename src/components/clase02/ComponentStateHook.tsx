import React, {useState} from "react"; //useState es el Hook
import { UsuarioDummy }  from "../constantes/constantes";
import { Usuario } from "../tipos/tipos";

const ComponentStateHook: React.FC = () =>{
    
    const [usuarioDummy, setUsuarioDummy] = useState<Usuario>(UsuarioDummy); //Hook

    const manejaSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(usuarioDummy);
    };

    const manejaCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;        
        setUsuarioDummy(prevState => ({
            ...prevState,
            [name]:value
        }));
    };

    return (
        <div className="container mt-5 mb-5">
            <h2>Formulario de Usuario</h2>
            <form onSubmit={manejaSubmit}> 
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input className="form-control" type="text" name="nombre" value={usuarioDummy.nombre}
                            onChange={manejaCambio} required/>
                </div>
                <label>{usuarioDummy.nombre}</label>
            </form>            
        </div>
    );
};

export default ComponentStateHook;