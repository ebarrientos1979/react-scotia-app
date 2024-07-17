type Props = {
    nombre:string,
    apellido?:string,
    dato:number[]
}


function MyComponent(props:Props){
    return (
        <>
            <h1>Hola { props.nombre.concat("-") }  { props.apellido } </h1>
            <h2>{ props.dato.length }</h2>
        </>
    );
}

export default MyComponent;