
import Update from "./Update"
import Delete from "./Delete"



function Crud({urlBase, userProps, idProps}) {
    return (
        <div>
            <Update urlBase={urlBase} updatedUser={userProps} idProps={idProps}/>
            <Delete urlBase={urlBase} idProps={idProps} />
        </div>
    )
}

export default Crud