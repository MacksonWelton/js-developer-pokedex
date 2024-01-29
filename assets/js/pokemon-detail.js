const content = document.getElementById("content");
const contentDetail = document.getElementById("contentDetail");
const typeList = document.getElementById("typeList");
const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const buttonReturn = document.getElementById("buttonReturn");
const photo = document.getElementById("photo");
const pokemonImage = document.getElementById("pokemonImage");

let pokemonDetails;

function convertTypeListToLi(type) {
  return `<li class="type ${type}">${type}</li>`;
}

function convertDescriptionPokemonToHTML(details) {
  const abilities = details.abilities.map(({ ability }) => ability.name);

  return `
        <thead>
          <tr>
            <th>Sobre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Altura</td>
            <td>${details.height / 10} m</td>
          </tr>
          <tr>
            <td>Peso</td>
            <td>${details.weight / 10} kg</td>
          </tr>
          <tr>
            <td>Habilidades</td>
            <td>${abilities.join(", ")}</td>
          </tr>
        </tbody>
  `;
}

function loadPokemonDetailHTML(details) {
  title.innerText = details.name;

  const newList = details.types.map(convertTypeListToLi).join("");
  typeList.innerHTML = newList;

  header.classList.toggle(details.type);
  buttonReturn.classList.toggle(details.type);
  pokemonImage.innerHTML = `<img src="${details.photo}" alt="${details.name}">`;

  description.innerHTML = convertDescriptionPokemonToHTML(details);
}

function loadPokemonDetail(details) {
  contentDetail.style.display = "flex";
  content.style.display = "none";

  const head = document.querySelector("head");

  loadPokemonDetailHTML(details);

  pokemonDetails = details;
}

buttonReturn.addEventListener("click", () => {
  contentDetail.style.display = "none";
  content.style.display = "block";

  header.classList.toggle(pokemonDetails.type);
  buttonReturn.classList.toggle(pokemonDetails.type);
});
