

function Update({urlBase,updatedUser,idProps}) {

  const handleUpdate = (event) => {


    function updateOne(id, user) {
      fetch(urlBase + `/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    updateOne(idProps, updatedUser);

  }



  return (

    <button onClick={handleUpdate}>Update</button>

  )
}

export default Update