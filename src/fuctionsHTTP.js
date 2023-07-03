


export function addOne(user, urlBase) {

  fetch(urlBase, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })

    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

}



export function updateOne(id, user, urlBase) {
  fetch(urlBase + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}




export function deleteOne(id, urlBase) {
  fetch(urlBase + id, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}


