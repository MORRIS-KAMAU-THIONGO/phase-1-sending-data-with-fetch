// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
      // Append the new id to the DOM
      const idElement = document.createElement('p');
      idElement.textContent = object.id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      // Append error message to the DOM
      const errorElement = document.createElement('p');
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}