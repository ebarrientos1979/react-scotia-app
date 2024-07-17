import React from 'react';

interface PropsComponente {
    nombre: string;
    edad: number;
    email?: string; //Consigna al parametro como opcional.
}

const Componente: React.FC<PropsComponente> = ({nombre, edad, email}) => {
    return (
        <>
            <div className="container mt-5">
                <div className='card'>
                    <div className="card-body">
                        <h5 className="card-title" >Nombre: {nombre}</h5>
                        <h6 className='card-subtitle mb-2 text-body-secondary' >Edad: {edad}</h6>
                        {email && <a href="#" className="card-link" >{email}</a>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Componente;
