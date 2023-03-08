import { useState } from "react";
import { Fragment } from "react";

const Autorizacion = (ComponenteValid, roles_permitidos) => { 
    const [usuario, setUsuario] = useState({idUsuario:"1234", role:"USER"})

    return (
        <>
        {
            roles_permitidos.includes(usuario.role) ? <ComponenteValid/> : <h1> PAGINA NO PERMITIDA </h1>       
        } 

        </>
    )


}
export default Autorizacion; 