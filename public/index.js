console.clear();

const searchInput = document.querySelector("input");
const datalist = document.querySelector("datalist");
const searchBtn = document.querySelector("button");
const info = document.querySelector(".info");
const title = document.querySelector("#title");
const Platform = document.querySelector("#platform");
const genres = document.querySelector("#genres");
const poster = document.querySelector("#poster");

searchBtn.addEventListener("click", getinfo);

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

function getinfo(event) {
  event.preventDefault();

  if (searchInput.value == "") {
    alert("You Need To Type A Game Name");
  } else {
    let game = searchInput.value;
    console.log("btn : " + game);

    fetch(`/search/?name=${game}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((result) => {
        info.style.display = "block";
        title.textContent = result[0].name;
        platform.textContent = "Platforms : " + result[0].platform;
        genres.textContent = "Genres : " + result[0].genres;
        poster.src = result[0].poster;
        console.log("name : " + result[0].genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
