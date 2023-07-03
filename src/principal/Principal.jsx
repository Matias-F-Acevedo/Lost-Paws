import Navbar from "../navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import "./principal.css"
import { useContext } from "react";
import { UserContext } from '../UserContext';
import Buscador from "../navbar/Buscador";

import { addOne, updateOne, deleteOne } from "../fuctionsHTTP";
import { uploadFile } from "../firebase/config";

// iconos----
import { FcAddDatabase } from "react-icons/fc";


import Swal from "sweetalert2";




const url = "https://648e054b2de8d0ea11e87f07.mockapi.io/pets/";


function Principal() {

    const { user } = useContext(UserContext);

    const [mascotas, setMascotas] = useState([])


    const [actualizar, setActualizar] = useState(false)

    const [error, setError] = useState(false);




    useEffect(() => {
        fetch(url).then((res) => {
            if (!res.ok) throw new Error("Request Error");
            return res.json();
        }).then((resOk) => setMascotas(resOk)).catch((err) => {
            console.log(err)
            setError(true)
        });
    }, [actualizar]);






    function refrescar() {
        setTimeout(() => setActualizar(!actualizar), 1000)
    }





    // -------------------------------modal/dialog----------------------------

    const dialogo = useRef();




    const pet = {

        "name": "",
        "date": "",
        "city": "",
        "raza": "",
        "gender": "",
        "age": "",
        "size": "",
        "contact": "",
        "image": "",
        "id": ""

    }

    const [currentPet, setcurrentPet] = useState({
        "name": "",
        "date": "",
        "city": "",
        "raza": "",
        "gender": "",
        "age": "",
        "size": "",
        "contact": "",
        "image": "",
        "id": ""
    });



    const containerCard = useRef();


    function selectPet(mascota) {
        setcurrentPet(mascota)
        setCreate(false)
        dialogo.current.show();
        containerCard.current.classList.add("displayNone")

    }

    function deletePet() {
        Swal.fire(
            {
                icon: "question",
                title: "Are you sure you want to eliminate this Card?",
                showDenyButton: true,
                denyButtonText: "CANCEL",
                confirmButtonText: "DELETE",
                confirmButtonColor: "green",

            }
        ).then(response => {
            if (response.isConfirmed) {
                deleteOne(currentPet.id, url)
                containerCard.current.classList.remove("displayNone")
                dialogo.current.close();
                refrescar();
                Swal.fire("Card has been successfully removed", "", "success")
            } else if (response.isDenied) {
                Swal.fire("The card has not been removed", "", "info")
            } else {
            }
        })

    }



    const inputFile = useRef()

    function updatePet(event) {
        event.preventDefault();

        containerCard.current.classList.remove("displayNone")
        if (inputFile.current.files[0] !== undefined) {
            dialogo.current.close();
            Swal.fire("The card has been successfully updated", "", "success")
            uploadFile(inputFile.current.files[0]).then((res) => {
                updateOne(currentPet.id, { ...currentPet, image: res }, url)
                inputFile.current.value = ""
                refrescar();

            }
            ).catch((err) => console.log(err))
        } else {
            updateOne(currentPet.id, currentPet, url)
            dialogo.current.close();
            Swal.fire("The card has been successfully updated", "", "success")
            refrescar();

        }
    }



    const [create, setCreate] = useState(false);

    function reateAd() {
        setcurrentPet(pet)
        containerCard.current.classList.add("displayNone")
        dialogo.current.show();
        setCreate(true)
    }


    function crearPet(event) {
        event.preventDefault();
        containerCard.current.classList.remove("displayNone")
        if (inputFile.current.files[0] !== undefined) {
            dialogo.current.close();
            Swal.fire("Successfully created Card", "", "success")
            uploadFile(inputFile.current.files[0]).then((res) => {
                addOne({ ...currentPet, image: res }, url)
                inputFile.current.value = ""
                refrescar();
            }
            ).catch((err) => console.log(err))
        } else {
            addOne({ ...currentPet, image: "https://firebasestorage.googleapis.com/v0/b/prog-trabajo-final-integrador.appspot.com/o/no-hay-icono-de-imagen-disponible-vector-plano.jpg?alt=media&token=642989a7-169b-45b2-af07-caacb48f9be0" }, url)
            dialogo.current.close();
            Swal.fire("Successfully created Card", "", "success")
            refrescar();

        }
    }



    function closeDialog(e) {
        e.preventDefault();
        containerCard.current.classList.remove("displayNone")
        dialogo.current.close()
        setCreate(false)

    }




    return (
        <>
            <Navbar componenteAdicional={<Buscador />} />

            {
                mascotas.length == 0 && user !== true && error == false ?
                    <h2>Loading...</h2>
                    : <></>
            }


            {user ?
                <>
                    <div className="container-btnCreate">
                        <button className="btnCreate" onClick={() => reateAd()}><FcAddDatabase /></button>
                    </div>

                    {
                        mascotas.length == 0 && user == true && error == false ?
                            <h2>Loading...</h2>
                            : <></>
                    }



                    <dialog ref={dialogo} className="dialog">

                        <button className="btnExitDialog" onClick={(e) => closeDialog(e)}>x</button>


                        <form onSubmit={create ? (event) => crearPet(event) : (event) => updatePet(event)}>



                            <label>Nombre</label>
                            <input type="text" name="nombre" placeholder="nombre" value={currentPet.name} onChange={(e) => { setcurrentPet(prev => ({ ...prev, name: e.target.value })) }} required />


                            <label>Perdido el dia (dd/mm/yy)</label>
                            <input type="text" name="date" placeholder="Perdido el dia (dd/mm/yy)" value={currentPet.date} onChange={(e) => { setcurrentPet(prev => ({ ...prev, date: e.target.value })) }} required />

                            <label>City</label>
                            <input type="text" name="city" placeholder="City" value={currentPet.city} onChange={(e) => { setcurrentPet(prev => ({ ...prev, city: e.target.value })) }} required />

                            <label>Raza</label>
                            <input type="text" name="raza" placeholder="Raza" value={currentPet.raza} onChange={(e) => { setcurrentPet(prev => ({ ...prev, raza: e.target.value })) }} required />

                            <label>Gender</label>
                            <input type="text" name="gender" placeholder="Gender" value={currentPet.gender} onChange={(e) => { setcurrentPet(prev => ({ ...prev, gender: e.target.value })) }} required />

                            <label>Age</label>
                            <input type="number" name="age" placeholder="Age" value={currentPet.age} onChange={(e) => { setcurrentPet(prev => ({ ...prev, age: e.target.value })) }} required />

                            <label>Size</label>
                            <input type="text" name="size" placeholder="Size" value={currentPet.size} onChange={(e) => { setcurrentPet(prev => ({ ...prev, size: e.target.value })) }} required />

                            <label>Contact</label>
                            <input type="text" name="contact" placeholder="Contact" value={currentPet.contact} onChange={(e) => { setcurrentPet(prev => ({ ...prev, contact: e.target.value })) }} required />
                            <div className="form-file-image">
                                <label>Imagen:</label>
                                <input type="file" accept="image/*" name="imagPet" ref={inputFile} />
                            </div>


                            {create ?
                                <div className="form-div-buttons">
                                    <button type="submit">Crear</button>
                                </div>
                                :
                                <div className="form-div-buttons">
                                    <button type="submit">Update</button>
                                </div>
                            }
                        </form>

                        {create ?
                            <div className="dialog-div-buttons">
                                <button onClick={(e) => closeDialog(e)}>Cancelar</button>
                            </div>
                            :
                            <div className="dialog-div-buttons">
                                <button onClick={() => deletePet()}>Delete</button>
                            </div>
                        }
                    </dialog >
                </>
                :
                <></>
            }
            <div ref={containerCard} className="container-card">
                {

                    mascotas.map((mascota) =>

                        <div className="card" key={mascota.id} onClick={() => selectPet(mascota)} >
                            <div className="filtro buscador">{mascota.raza}</div>

                            <div className="container-img">
                                <img src={mascota.image} alt="mascota perdida"
                                    className="imagen-perro" />

                                <div className="nombre-perro">
                                    <p>Se busca a {mascota.name.toUpperCase()}</p>
                                </div>
                            </div>
                            <div className="container-contenido" >
                                <ul>
                                    <li>Se perdio el {mascota.date} en {mascota.city}</li>
                                    <li>Raza: {mascota.raza}</li>
                                    <li>Sexo: {mascota.gender}</li>
                                    <li>Edad: {mascota.age}</li>
                                    <li>Tamaño: {mascota.size}</li>
                                    <li>Contacto: {mascota.contact}</li>
                                </ul>

                            </div>


                        </div>


                    )


                }
            </div>

        </>
    )
}

export default Principal