import Navbar from "../../navbar/Navbar";
import "./Login.css"
import { useState } from "react"




function Login({ setAcceso, accesoPermitido }) {

    const urlUsuariosRegistrados = "https://648e054b2de8d0ea11e87f07.mockapi.io/users"

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = (event) => {
        event.preventDefault()

        if (user === "" || password === "") {
            setError("Ingrese todos los campos");
            return
        } else {

            fetch(urlUsuariosRegistrados).then((response) => response.json()).then((data) => data.forEach(element => {
                if (element.user === user && element.password === password) {
                    setAcceso(true)
                    return
                }

            })).catch((error) => console.log(error, "No se puedo resolver la peticion"));
        }

        if (accesoPermitido === false) {
            setError("La contraseña o el usuario que ha ingresado es incorrecto");
        }
    }


    return (
        <>
            <Navbar accesoPermitido={accesoPermitido} setAcceso={setAcceso} />
            {accesoPermitido ?
                <h1>{`Bienvenido ${user.toLocaleUpperCase()}`}</h1>
                :
                <div className="container-login">
                    <div className="login">
                        <h1 className="title-login">Log in</h1>
                        <p>{error}</p>
                        <form onSubmit={handleSubmit} className="formulario">
                            <input type="text" value={user} placeholder="User" onChange={event => setUser(event.target.value)} />
                            <input type="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
                            <button>Sing in</button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}




export default Login