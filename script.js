class pokemon {
    constructor(id, name, types, cryURL, flavourText, sprite) {
        this.id = id
        this.name = name
        this.types = types
        this.cryURL = cryURL
        this.flavourText = flavourText
        this.sprite = sprite
    }
    generateHTML() {
        return `
         
        `
    }
}

const header = document.getElementById("header");

const pokemonName = document.getElementById("pokemonName");
const pokemonId = document.getElementById("pokemonId");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");
const pokemonSprite = document.getElementById("pokemonSprite");
const pokemonDescription = document.getElementById("pokemonDescription");
const pokeHeight = document.getElementById("pokeHeight");
const pokeWeight = document.getElementById("pokeWeight");

const favDiv = document.getElementById("favDiv");
const favPokemonInfo = document.getElementById("favPokemonInfo");

const pokeFavIcon = document.getElementById("pokeFavIcon");
const pokeFavID = document.getElementById("pokeFavID");
const pokeFavName = document.getElementById("pokeFavName");

const footerDiv = document.getElementById("footerDiv");

const fetchButton = document.getElementById("fetchButton");
const fetchTxt = document.getElementById("fetchTxt");

const favButton = document.getElementById("favButton");
const favButton2 = document.getElementById("favButton2");

const cryButton = document.getElementById("cryButton");
const cryButton2 = document.getElementById("cryButton2");

const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

const filterFavButton = document.getElementById("filterFavButton");

const searchIcon = document.getElementById("searchIcon");
const favIcon = document.getElementById("favIcon");
const cryIcon = document.getElementById("cryIcon");
const backIcon = document.getElementById("backIcon");
const nextIcon = document.getElementById("nextIcon");

const gridDiv = document.getElementById("gridDiv");




function alterDataPokemon(data) {
    //Pokemon Main Data
    pokemonName.textContent = data.name.toUpperCase()
    pokemonId.textContent = data.id
    //

    //Types
    type1.textContent = data.types[0].type.name
    type1.style.backgroundColor = "var(--" + data.types[0].type.name + ")"
    type1.textContent = type1.textContent.toUpperCase()
    if (data.types.length > 1) {
        type2.style.visibility = "visible"
        type2.textContent = data.types[0].type.name
        type2.style.backgroundColor = "var(--" + data.types[0].type.name + ")"
        type2.textContent = type1.textContent.toUpperCase()
    } else {
        type2.style.visibility = "hidden"
    }


    //
    pokemonSprite.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
    //

}

// function alterDataSpecies(data) {
//     desc
// }


console.log("Gotta catch'em all!")

async function fetchData(DTBF, TypeofFetch) {
    let path
    try {
        if (TypeofFetch.toLowerCase() == "species") {
            path = "/pokemon-species/" + DTBF
        } else {
            path = "/pokemon/" + DTBF
        }

        const response = await fetch("https://pokeapi.co/api/v2" + path)
        if (!response.ok) {
            throw new Error("deu ruim")
        }
        
        const data = await response.json()
        console.log(data)

        alterDataPokemon(data)

        if (TypeofFetch.toLowerCase() == "species") {
            alterDataSpecies(data)
        }

    } catch (error) {
        console.error(error)
    }
}

fetchData("pikachu", "pokemon")
// fetchData("pikachu", "species")