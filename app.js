// const id = Math.floor(Math.random() * 151);

// const api = `https://pokeapi.co/api/v2/pokemon/${id}`;

const quote = document.getElementById("quote");
const pokeid = document.getElementById("id");
const btn = document.getElementById("btn");
const img = document.querySelector("img");
const type = document.getElementById("poketype");

btn.addEventListener("click", getMon);

function getMon() {
  const id = Math.floor(Math.random() * 151);
  const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      img.src = sprite;
      quote.innerHTML = `${data.name}`;
      pokeid.innerHTML = `# ${id}`;
      type.innerHTML = `type: ${data.types[0].type.name}`;
    })
    .catch((err) => {
      console.log("Error", err);
    });
}
