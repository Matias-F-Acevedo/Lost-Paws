// ---------components-----------------------------------------
import Navbar from "../navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import "./principal.css"
import { useContext } from "react";
import { UserContext } from '../UserContext';
import Buscador from "../navbar/Buscador";
// ---------functions-----------------------------------------
import { addOne, updateOne, deleteOne } from "../fuctionsHTTP";
import { uploadFile } from "../firebase/config";
// ---------Styles(icons, alert)-----------------------------------------
import { FcAddDatabase } from "react-icons/fc";
import Swal from "sweetalert2";
import Footer from "../footer/footer";



const urlBase = "https://648e054b2de8d0ea11e87f07.mockapi.io/pets/";


function Principal() {
    // global state
    const { user } = useContext(UserContext);
    // backend items
    const [pets, setPets] = useState([])

    const [refreshComponent, setRefreshComponent] = useState(false)

    const [error, setError] = useState(false);
    // for use in conditional rendering:
    const [create, setCreate] = useState(false);

    const containerCard = useRef();

    const inputFile = useRef()

    useEffect(() => {
        fetch(urlBase).then((res) => {
            if (!res.ok) throw new Error("Request Error");
            return res.json();
        }).then((resOk) => setPets(resOk)).catch((err) => {
            console.log(err)
            setError(true)
        });
    }, [refreshComponent]);



    function refresh() {
        setTimeout(() => setRefreshComponent(!refreshComponent), 1000)
    }

    // -------------------------------modal/dialog----------------------------

    const dialog = useRef();


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


    // --------------------------------crud functions-------------------------
    function selectPet(pet) {
        setcurrentPet(pet)
        setCreate(false)
        dialog.current.show();
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
                iconColor: "#581845",


            }
        ).then(response => {
            if (response.isConfirmed) {
                deleteOne(currentPet.id, urlBase)
                containerCard.current.classList.remove("displayNone")
                dialog.current.close();
                refresh();
                Swal.fire(
                    {
                        icon: "success",
                        title: "Card has been successfully removed",
                        confirmButtonColor: "#581845",
                        iconColor: "#581845",
                    })
            } else if (response.isDenied) {
                Swal.fire(
                    {
                        icon: "info",
                        title: "The card has not been removed",
                        confirmButtonColor: "#581845",
                        iconColor: "#581845",
                    })
            } else {
            }
        })

    }


    function updatePet(event) {
        event.preventDefault();

        containerCard.current.classList.remove("displayNone")
        if (inputFile.current.files[0] !== undefined) {
            dialog.current.close();
            Swal.fire(
                {
                    icon: "success",
                    title: "The card has been successfully updated",
                    confirmButtonColor: "#581845",
                    iconColor: "#581845",
                })
            uploadFile(inputFile.current.files[0]).then((res) => {
                updateOne(currentPet.id, { ...currentPet, image: res }, urlBase)
                inputFile.current.value = ""
                refresh();

            }
            ).catch((err) => console.log(err))
        } else {
            updateOne(currentPet.id, currentPet, urlBase)
            dialog.current.close();
            Swal.fire({
                icon: "success",
                title: "The card has been successfully updated",
                confirmButtonColor: "#581845",
                iconColor: "#581845",
            })
            refresh();

        }
    }


    function createCard() {
        setcurrentPet(pet)
        containerCard.current.classList.add("displayNone")
        dialog.current.show();
        setCreate(true)
    }


    function confirmCreateCard(event) {
        event.preventDefault();
        containerCard.current.classList.remove("displayNone")
        if (inputFile.current.files[0] !== undefined) {
            dialog.current.close();
            Swal.fire(
                {
                    icon: "success",
                    title: "Successfully created Card",
                    confirmButtonColor: "#581845",
                    iconColor: "#581845",
                })
            uploadFile(inputFile.current.files[0]).then((res) => {
                addOne({ ...currentPet, image: res }, urlBase)
                inputFile.current.value = ""
                refresh();
            }
            ).catch((err) => console.log(err))
        } else {
            addOne({ ...currentPet, image: "https://firebasestorage.googleapis.com/v0/b/prog-trabajo-final-integrador.appspot.com/o/imagenNoDisponible.png?alt=media&token=399f9a89-c3e8-4c59-9d36-010f0fb39fa3" }, urlBase)
            dialog.current.close();
            Swal.fire({
                icon: "success",
                title: "Successfully created Card",
                confirmButtonColor: "#581845",
                iconColor: "#581845",
            })
            refresh();

        }
    }



    function closeDialog(e) {
        e.preventDefault();
        containerCard.current.classList.remove("displayNone")
        dialog.current.close()
        setCreate(false)

    }




    return (
        <>
            <Navbar componentAdditional={<Buscador />} />

            {
                pets.length == 0 && user !== true && error == false ?
                    <h2>Loading...</h2>
                    : <></>
            }

            {user ?
                <>
                    <div className="container-btnCreate">
                        <button className="btnCreate" onClick={() => createCard()}><FcAddDatabase /></button>
                    </div>

                    {
                        pets.length == 0 && user == true && error == false ?
                            <h2>Loading...</h2>
                            : <></>
                    }



                    <dialog ref={dialog} className="dialog">

                        <button className="btnExitDialog" onClick={(e) => closeDialog(e)}>x</button>


                        <form onSubmit={create ? (event) => confirmCreateCard(event) : (event) => updatePet(event)}>



                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" value={currentPet.name} onChange={(e) => { setcurrentPet(prev => ({ ...prev, name: e.target.value })) }} required />


                            <label>Lost day (dd/mm/yy)</label>
                            <input type="text" name="date" placeholder="Lost day (dd/mm/yy)" value={currentPet.date} onChange={(e) => { setcurrentPet(prev => ({ ...prev, date: e.target.value })) }} required />

                            <label>City</label>
                            <input type="text" name="city" placeholder="City" value={currentPet.city} onChange={(e) => { setcurrentPet(prev => ({ ...prev, city: e.target.value })) }} required />

                            <label>Breed</label>
                            <input type="text" name="breed" placeholder="Breed" value={currentPet.raza} onChange={(e) => { setcurrentPet(prev => ({ ...prev, raza: e.target.value })) }} required />

                            <label>Gender</label>
                            <input type="text" name="gender" placeholder="Gender" value={currentPet.gender} onChange={(e) => { setcurrentPet(prev => ({ ...prev, gender: e.target.value })) }} required />

                            <label>Age</label>
                            <input type="number" name="age" placeholder="Age" value={currentPet.age} onChange={(e) => { setcurrentPet(prev => ({ ...prev, age: e.target.value })) }} required />

                            <label>Size</label>
                            <input type="text" name="size" placeholder="Size" value={currentPet.size} onChange={(e) => { setcurrentPet(prev => ({ ...prev, size: e.target.value })) }} required />

                            <label>Contact</label>
                            <input type="text" name="contact" placeholder="Contact" value={currentPet.contact} onChange={(e) => { setcurrentPet(prev => ({ ...prev, contact: e.target.value })) }} required />
                            <div className="form-file-image">
                                <label className="labelPetImage">Pet image:</label>
                                <input type="file" accept="image/*" name="imgPet" ref={inputFile} />
                            </div>


                            {create ?
                                <div className="form-div-buttons">
                                    <button className="btn-create-update" type="submit">Create</button>
                                </div>
                                :
                                <div className="form-div-buttons">
                                    <button className="btn-create-update" type="submit">Update</button>
                                </div>
                            }
                        </form>

                        {create ?
                            <div className="dialog-div-buttons">
                                <button className="btn-cancel-delete" onClick={(e) => closeDialog(e)}>Cancel</button>
                            </div>
                            :
                            <div className="dialog-div-buttons">
                                <button className="btn-cancel-delete" onClick={() => deletePet()}>Delete</button>
                            </div>
                        }
                    </dialog >
                </>
                :
                <></>
            }
            <div ref={containerCard} className="container-card">
                {

                    pets.map((pet) =>

                        <div className={user ? "card" : "sight-card"} key={pet.id} onClick={user ? () => selectPet(pet) : () => { }} >
                            <div className="filter  search">{pet.raza}</div>

                            <div className="container-img">
                                <img src={pet.image} alt="lost pet"
                                    className="image-pet" />

                                <div className="dog-name">
                                    <p>{pet.name.toUpperCase()} Wanted</p>
                                </div>
                            </div>
                            <div className="container-content" >
                                <ul>
                                    <li>Lost on {pet.date} at {pet.city}</li>
                                    <li>Breed: {pet.raza}</li>
                                    <li>Sex: {pet.gender}</li>
                                    <li>Age: {pet.age}</li>
                                    <li>Size: {pet.size}</li>
                                    <li>Contact: {pet.contact}</li>
                                </ul>

                            </div>


                        </div>


                    )


                }
            </div>
            <Footer />

        </>
    )
}

export default Principal