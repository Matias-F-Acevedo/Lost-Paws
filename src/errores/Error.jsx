import { useRouteError } from "react-router-dom";

function Error (){

    const error = useRouteError();
    
    return (
        <div>
            <h1>ERROR</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default Error