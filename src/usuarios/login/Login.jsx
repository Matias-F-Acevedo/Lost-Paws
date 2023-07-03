import Navbar from "../../navbar/Navbar";
import "./Login.css"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../UserContext.jsx";




function Login() {

    // con useContext uso el estado global del UserContext
    const { user, handleLogin, handleLogout } = useContext(UserContext);


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);

    const urlUsuariosRegistrados = "https://648e054b2de8d0ea11e87f07.mockapi.io/users"


    const fetchUsers = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    // maneja el estado de los usuarios cada vez que se monte el componente
    useEffect(() => {
        fetchUsers(urlUsuariosRegistrados);
    }, []);



    const handleSubmit = (event) => {
        event.preventDefault();

        if (userName === "" || password === "") {
            setError("Ingrese todos los campos");
            return
        } else {
            const user = users.find(
                (u) => u.user === userName && u.password === password
            );

            if (user) {
                //guarda el usuario en contexto global y en localstorage
                handleLogin(user);
                setError("Loggeado Correctamente");
            } else {
                setError("La contraseña o el usuario que ha ingresado es incorrecto");
            }
        }
    }



    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     if (userName === "" || password === "") {
    //         setError("Ingrese todos los campos");
    //         return
    //     } else {

    //         fetch(urlUsuariosRegistrados).then((response) => response.json()).then((data) => data.forEach(element => {
    //             if (element.userName === userName && element.password === password) {
    //                 setAcceso(true)
    //                 return
    //             }

    //         })).catch((error) => console.log(error, "No se puedo resolver la peticion"));
    //     }

    //     if (accesoPermitido === false) {
    //         setError("La contraseña o el usuario que ha ingresado es incorrecto");
    //     }
    // }




    return (
        <>
            <Navbar/>
            {user ?
                <div>
                    <h1 className="login-welcome">{`Bienvenido ${userName.toLocaleUpperCase()}`}</h1>
                </div>
                :
                <div className="container-login">
                    <div className="login">
                        <h1 className="title-login">Log in</h1>
                        <p>{error}</p>
                        <form onSubmit={handleSubmit} className="formulario">
                            <input type="text" value={userName} placeholder="User" onChange={event => setUserName(event.target.value)} />
                            <input type="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
                            <button type="submit">Sing in</button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}




export default Login