import Login from "./usuarios/login/Login"
import Principal from "./principal/Principal"
import Error from "./errores/Error"
import Nosotros from "./nosotros/Nosotros"
import FormContacto from "./contacto/FormContacto"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { UserProvider } from './UserContext.jsx';









function App() {



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Principal/>,
            errorElement: <Error />,
        },
        {
            path: '/nosotros',
            element: <Nosotros/>,
        },
        {
            path: '/contacto',
            element: <FormContacto/>,
        },
        {
            path: '/login',
            element: <Login/>,
        },

    ]);




    return (
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>
    )
}

export default App