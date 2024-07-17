import React from "react";
import { UsuarioDummy } from "../constantes/constantes";
import ComponenteCondicional from "./ComponenteCondicional";


const Demo2 = () => {
    return (
        <div>
            <ComponenteCondicional
                {...{
                    logueado:false,
                    mensajeBienvenida:"Crear su cuenta de Acceso"
                }}
            />
            <ComponenteCondicional
                {...{
                    logueado:true,
                    usuario: UsuarioDummy                        
                }}
            />
        </div>
    );
};