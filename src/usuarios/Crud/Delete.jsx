

function Delete({ idProps, urlBase }) {

  const handleDelete = (event) => {

    function deleteOne(id) {
      fetch(urlBase + `/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    deleteOne(idProps);

  }



  return (

    <button onClick={handleDelete}>Delete</button>

  )
}

export default Delete