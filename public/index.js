const searchInput = document.querySelector("input");
const datalist = document.querySelector("datalist");

searchInput.addEventListener("keyup", (event) => {
  datalist.innerHTML = "";

  fetch(`/search/?name=${searchInput.value}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((result) => {
      for (let i = 0; i <= result.length; i++) {
        const option = document.createElement("option");
        option.innerHTML = `<option value="${result[i].name}" />`;
        datalist.appendChild(option);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
