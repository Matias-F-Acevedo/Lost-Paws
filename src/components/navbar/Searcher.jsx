
function Searcher(){

  
  function handleKeyUp(e)  {
      if (e.target.matches("#inputSearch")) {
        document.querySelectorAll(".search").forEach((element) => {
          if (
            element.textContent
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          ) {
            element.parentNode.classList.remove("filter");
          } else {
            element.parentNode.classList.add("filter");
          }
        });
      }
    }
  
  
      return(
        <input type="text" onKeyUp={handleKeyUp} id="inputSearch" placeholder= "Search by breed" />
      )
  }
  
  
  export default Searcher;