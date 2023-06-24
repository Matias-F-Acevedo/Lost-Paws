import Navbar from "../navbar/Navbar"
function Principal ({accesoPermitido, setAcceso}){
    return(
        <div>
            <Navbar accesoPermitido={accesoPermitido} setAcceso={setAcceso}/>
            <h1>Principal, hola lorehdfgh</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iure ipsam exercitationem nobis provident doloremque repellendus, necessitatibus officiis natus. Reiciendis, rem facilis. Culpa debitis asperiores iure totam nostrum facere blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum sunt quibusdam veniam minus! Dolore doloribus sit, beatae expedita dolores incidunt vero nemo veniam, enim a mollitia nihil corrupti consequuntur.</p>
        </div>
    )
}

export default Principal