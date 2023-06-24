

function Create({ userProps, urlBase }) {

  const handleCreate = (event) => {

    function addOne(user) {
      fetch(urlBase, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }

    addOne(userProps);

  }



  return (

    <button onClick={handleCreate}>Create</button>

  )
}

export default Create