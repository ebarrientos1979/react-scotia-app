import React, { useCallback, useState } from "react";

const ComponentCallHook : React.FC= () => {
    const [numeros, setNumeros] = useState<number[]>([]);
    const [valorInput, setValorInput] = useState<string>('');

    const cambioValor = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setValorInput(e.target.value);
    }, [] );

    const agregarNumero = useCallback(() => {
        const nuevoValor = parseInt(valorInput);
        if(!isNaN(nuevoValor)){
            setNumeros(prevNumeros => [...prevNumeros, nuevoValor]);
            setValorInput('');
        }
    }, [valorInput]);

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Lista de números</h2>
            <ol>
                {numeros.map((numero, indice) => (
                    <li key={indice}>{numero} - {indice}</li>
                ))}
            </ol>
            <input className="form-control mb-3" type="number" value={valorInput}
                onChange={cambioValor}/>
            <button className="btn btn-primary mb-3" onClick={agregarNumero}>
                Agregar numero
            </button>
        </div>
    );

};

export default ComponentCallHook;