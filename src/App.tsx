import Componente from "./components/clase02/Componente";
import { UsuarioDummy } from "./components/constantes/constantes";
import "bootstrap/dist/css/bootstrap.min.css"


function App(){
  //const numeros = [1,2,3,4,5,6];
  //return <MyComponent nombre="Edwin" apellido="Barrientos" dato={ numeros } />;

  return (
    <>
      <Componente
        nombre={UsuarioDummy.nombre}
        edad= {UsuarioDummy.edad}        
      />
    </>
  )
}

export default App;