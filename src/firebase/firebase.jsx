import { uploadFile } from './config'
import { useState } from 'react'



function SubirImagenes() {

    const [file, setFile] = useState(null)
    const [url, setUrl] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const resultUrl = await uploadFile(file);
            setUrl(resultUrl);
        } catch (error) {
            console.log(error);
            alert("Fallo interno. Intente mas tarde, lo estamos solucionando :) .")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="file" name="" id="" onChange={event => setFile(event.target.files[0])} />
                <button >Upload/Subir</button>
            </form>

        <img src={url} alt="espera un ratito" />
        </div>
    )
}


export default SubirImagenes