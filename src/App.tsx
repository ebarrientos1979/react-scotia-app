import "bootstrap/dist/css/bootstrap.min.css"
import LoginForm from "./components/clase04/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListarClientes from "./components/clase04/ListarClientes";


function App(){
  //const numeros = [1,2,3,4,5,6];
  //return <MyComponent nombre="Edwin" apellido="Barrientos" dato={ numeros } />;

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/crudCliente' element={<ListarClientes/>} />
        </Routes>
    </Router>
  )
}

export default App;
