import "bootstrap/dist/css/bootstrap.min.css"
import ComponentCallHook from "./components/clase02/ComponentCallHook";
import ComponentEffectHook from "./components/clase02/ComponentEffectHook";


function App(){
  //const numeros = [1,2,3,4,5,6];
  //return <MyComponent nombre="Edwin" apellido="Barrientos" dato={ numeros } />;

  return (
    <>
      <ComponentCallHook
      />

      <ComponentEffectHook
      />
    </>
  )
}

export default App;