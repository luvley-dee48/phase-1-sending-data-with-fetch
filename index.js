// Add your code here
// function submitData(name, email) {
//     const url = 'http://localhost:3000/users'

//     const data = {
//         name: name,
//         email: email
//     };
// }
function submitData(name, email) {
  const url = "http://localhost:3000/users";

  const data = {
    name: name,
    email: email
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data)
  };

  return fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw new Error("network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
      const userId = data.id;
      document.body.textContent = `New user ID: ${userId}`;
      return data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      document.body.textContent = `Error: ${error.message}`;

      return error;
    });
}


