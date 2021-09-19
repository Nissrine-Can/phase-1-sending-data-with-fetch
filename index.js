
function submitData(name, email) {

    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

    return fetch('http://localhost:3000/users', configurationObject)
    .then(response => response.json())
    .then(formData => {
        document.body.innerHTML = formData.id;
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        return document.body.innerHTML = error.message;
      });

}

