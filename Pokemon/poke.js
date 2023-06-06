let api_pokemon = 'https://pokeapi.co/api/v2/pokemon/'
let appNode = document.getElementById('datos')


async function searchPokemon () {
        let pokemon1 = document.getElementById('pokemonName');
        let pokemon2 = pokemon1.value.toLowerCase();
        console.log(pokemon1.value)
        let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`);
        let data = await pokemons.json();
        console.log(data)
        let habilidades = data.abilities;
        console.log(habilidades)
        let habilidad = "";
        let nombre = "";
        let imagen = "";
        for(let i=0; i < habilidades.length; i++){  
            nombre = data.name;       
            habilidad += habilidades[i].ability.name + "<br>";  
            imagen = data.sprites.other.home.front_default;    
        }
        document.getElementById("datos_pokemon").innerHTML = `<table class="tabla">
                                                                <tr class="fila">
                                                                    <th>Nombre</th>
                                                                    <td>${nombre}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Habilidades</th>
                                                                    <td>${habilidad}</td>
                                                                </tr>
                                                               </table>`
        document.getElementById("imagen_pokemon").innerHTML = `<img src="${imagen}" alt="" id = "pokemon_img">`
        // console.log(habilidad)
        // console.log(nombre)
        // console.log(imagen)
}
searchPokemon()
// const renderPokemonData = data => {

// }
// function getPokemon(){
//     let url = api_pokemon;
//     let parametro
// }
// function getPokemon(){
//     fetch()
// }
// function obtenerPokemon(){
//     let pokemon = getPokemon(1)
// }