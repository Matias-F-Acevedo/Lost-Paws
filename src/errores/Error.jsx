import { useRouteError,Link } from "react-router-dom";
import "./error.css"
function Error (){

    const error = useRouteError();
    
    return (
        <div className="container-error">
           
            <img src="./src/errores/img1.svg" alt="Error" className="img-error"/>
             <h1 className="h1-error">Error: the page you requested does not exist. ({error.statusText || error.message})</h1>
            <div className="container-button-error"> 
            
            <Link to={"./"}><button className="button-error">Back</button></Link>
            </div>
        </div>
    )
}

export default Error