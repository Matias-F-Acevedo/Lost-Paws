

function Buscador(){


function handleKeyUp(e)  {
    if (e.target.matches("#inputSearch")) {
      document.querySelectorAll(".buscador").forEach((element) => {
        if (
          element.textContent
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          element.parentNode.classList.remove("filtro");
        } else {
          element.parentNode.classList.add("filtro");
        }
      });
    }
  }



    return(
      <input type="text" onKeyUp={handleKeyUp} id="inputSearch" placeholder="Buscar mascota"/>
    )
}


export default Buscador