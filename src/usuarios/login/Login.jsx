import Navbar from "../../navbar/Navbar";
import "./Login.css"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../UserContext.jsx";




function Login() {

    // con useContext uso el estado global del UserContext
    const { user, handleLogin} = useContext(UserContext);


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);

    const urlUsersRegistered = "https://648e054b2de8d0ea11e87f07.mockapi.io/users"


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
        fetchUsers(urlUsersRegistered);
    }, []);



    const handleSubmit = (event) => {
        event.preventDefault();

        if (userName === "" || password === "") {
            setError("Enter all fields");
            return
        } else {
            const user = users.find(
                (u) => u.user === userName && u.password === password
            );

            if (user) {
                //guarda el usuario en contexto global y en localstorage
                handleLogin(user);
                setError("Successfully logged in");
            } else {
                setError("The password or user you have entered is incorrect.");
            }
        }
    }



    return (
        <>
            <Navbar/>
            {user ?
                <div className="container-login-welcome">
                    <h1 className="login-welcome">{`Bienvenido ${userName.toLocaleUpperCase()} 🐾`}</h1>

                </div>
                
                :
                <div className="container-login">
                    <div className="login">
                        <h1 className="title-login">Iniciar sesion</h1>
                        <p className="p-error">{error}</p>
                        <form onSubmit={handleSubmit} className="form-login">
                            <input type="text" value={userName} placeholder="User" onChange={event => setUserName(event.target.value)} />
                            <input type="password" value={password} placeholder="Password" onChange={event => setPassword(event.target.value)} />
                            <button type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}




export default Login