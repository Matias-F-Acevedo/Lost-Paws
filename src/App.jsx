import Login from "./usuarios/login/Login"
import Principal from "./principal/Principal"
import { useState } from "react"
// import Create from "./usuarios/Crud/Create"
// import Crud from "./usuarios/Crud/Crud"
// import Navbar from "./navbar/Navbar"
import Error from "./errores/Error"
import Nosotros from "./nosotros/Nosotros"
import FormContacto from "./contacto/FormContacto"
import { createBrowserRouter, RouterProvider } from "react-router-dom"




 




function App() {

   const [accesoPermitido, setAccesoPermitido] = useState(false)



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Principal accesoPermitido={accesoPermitido} setAcceso={setAccesoPermitido}/>,
            errorElement: <Error />,
        },
        {
            path: '/nosotros',
            element: <Nosotros accesoPermitido={accesoPermitido} setAcceso={setAccesoPermitido}/>,
        },
        {
            path: '/contacto',
            element: <FormContacto accesoPermitido={accesoPermitido} setAcceso={setAccesoPermitido}/>,
        },
        {
            path: '/login',
            element:<Login setAcceso={setAccesoPermitido} accesoPermitido={accesoPermitido}/>,
        },
        
        ]);
        

    // const urlUsuariosRegistrados = "https://648e054b2de8d0ea11e87f07.mockapi.io/users"

    // const newUser = {
    //     user: "matias",
    //     password: "matias"
    // }


    return (
        <div>

            <RouterProvider router={router}/>

            {/* {accesoPermitido ? <h1>hola</h1> : <Login setAcceso={setAccesoPermitido} accesoPermitido={accesoPermitido}/>} */}

            

            {/* este crud tendra un renderizado condicional, en caso de que el estado de acceso permitido sea true se mostrara el mismo en la card, debajo de cada usuario, en el caso del boton Create se mostrara en otra parte de la pantalla, por eso su sepacion de los demas*/}

            {/* {accesoPermitido ? <Create urlBase={urlUsuariosRegistrados} userProps={newUser} /> : <div>hola</div>}
            {accesoPermitido ? <Crud urlBase={urlUsuariosRegistrados} userProps={newUser} idProps={4} /> : <div>hola</div>} */}




        </div>
    )
}

export default App