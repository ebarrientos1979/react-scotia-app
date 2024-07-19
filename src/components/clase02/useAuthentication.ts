import { useState, useEffect } from "react";
import { Usuario } from "../tipos/tipos";

//Definimos el tipo para el estado de autenticacion
type EstadoAutenticacion = {
  estaAutenticado: boolean;
  usuario: Usuario | null;
};

//Creamos el custom hook useAuthentication
function useAuthentication(): [
  EstadoAutenticacion,
  (usuario: Usuario | null) => void,
  () => void
] {
  //Inicializamos el estado de autenticación
  const [estadoAutenticacion, setEstadoAutenticacion] =
    useState<EstadoAutenticacion>({
      estaAutenticado: false,
      usuario: null,
    });

  //Funcion para iniciar sesion
  const login = (usuario: Usuario | null) => {
    setEstadoAutenticacion({ estaAutenticado: true, usuario });
  };

  //Funcion para cerrar sesion
  const logout = () => {
    setEstadoAutenticacion({ estaAutenticado: false, usuario: null });
  };

  useEffect(() => {
    const usuarioString = localStorage.getItem("usuario-autenticado");
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      login(usuario);
    }
  }, []);

  useEffect(() => {
    if (estadoAutenticacion.estaAutenticado && estadoAutenticacion.usuario) {
      localStorage.setItem(
        "usuario-autenticado",
        JSON.stringify(estadoAutenticacion.usuario)
      );
    } else {
      localStorage.removeItem("usuario-autenticado");
    }
  }, [estadoAutenticacion]);

  return [estadoAutenticacion, login, logout];
}

export default useAuthentication;
