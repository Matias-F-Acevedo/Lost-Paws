import Login from "./components/login/Login"
import Home from "./components/home/Home"
import Error from "./components/errors/Error"
import AboutUs from "./components/aboutUs/AboutUs"
import FormContact from "./components/contact/FormContact"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { UserProvider } from './context/UserContext';




function App() {



    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            errorElement: <Error />,
        },
        {
            path: '/AboutUs',
            element: <AboutUs/>,
        },
        {
            path: '/contact',
            element: <FormContact/>,
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