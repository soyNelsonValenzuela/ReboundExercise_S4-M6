// buscar un pokemon aleatorio con codigo asincrono

import fs from 'fs/promises'
//const fs = require('fs/promises');

async function selectRandomPokemon() {
    const data = await fs.readFile('./pokemones.txt', 'utf8')
    // Convertimos el contenido del archivo en un array
    const pokemones = data.split(',').filter(pokemon => pokemon.trim() !== '');
    // Seleccionamos un elemento aleatorio
    const pokemonAleatorio = pokemones[Math.floor(Math.random() * pokemones.length)];
    console.log(`Pokémon aleatorio seleccionado: ${pokemonAleatorio}`);
};


// Busca un pokemon con codigo sincrono
//import fs from 'fs'
//const fs = require('fs');

// Función para leer el archivo y seleccionar un elemento aleatorio

/* function selectRandomPokemon() {
    fs.readFile('./pokemones.txt','utf8', (err,data)=>{
        try {
           // Convertimos el contenido del archivo en un array
        const pokemones = data.split(',').filter(pokemon => pokemon.trim() !== '');
        // Seleccionamos un elemento aleatorio
        const pokemonAleatorio = pokemones[Math.floor(Math.random() * pokemones.length)];
        console.log(`Pokémon aleatorio seleccionado: ${pokemonAleatorio}`); 
        } catch (err) {
            console.error('Error al leer el archivo:', err);
        }
    })
};
*/

/*
function seleccionarPokemonAleatorio() {
    fs.readFile('./pokemones.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        };
        // Convertimos el contenido del archivo en un array
        const pokemones = data.split(',').filter(pokemon => pokemon.trim() !== '');
        // Seleccionamos un elemento aleatorio
        const pokemonAleatorio = pokemones[Math.floor(Math.random() * pokemones.length)];
        console.log(`Pokémon aleatorio seleccionado: ${pokemonAleatorio}`);
    });
};
*/
// Llamamos a la función
selectRandomPokemon();



/*
 Ingresa a https://random-data-api.com/documentation, para revisar la documentación
de la API de random data. Busca, al menos, tres URL y anota estos valores en un archivo
de texto en formato json. Utiliza el módulo fs para leerlo desde tu archivo index.js, luego
usa Axios para hacer una llamada a cada una de las URL, y muestra el resultado por
consola de manera secuencial.
*/

// al llamar las urls secuencialmente con axios la consola devuelve un status 429 (demasiadas llamadas al mismo tiempo)
//para evitar esta respuesta realizamos uns funsion sleep que genera una pausa entre cada solicitud


import axios from 'axios';

// Leer el archivo JSON y parsear los datos
// Función para hacer una pausa entre las solicitudes
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDataWithDelay(url, name) {
    try {
        await sleep(1000);  // Espera 1 segundo entre solicitudes
        const response = await axios.get(url);
        console.log(`---- Datos de ${name}: ----`)
        console.log(response.data);
    } catch (error) {
        console.error(`Error en la llamada de ${name}:`, error);
    }
}

async function fetchData() {
    try {
        const fileData = await fs.readFile('./urls.json', 'utf-8');
        const data = JSON.parse(fileData);

        // Llamadas a las URLs con pausas entre cada una
        await fetchDataWithDelay(data.user_url, 'usuario');
        await fetchDataWithDelay(data.address_url, 'dirección');
        await fetchDataWithDelay(data.beers_url, 'cerveza');
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }
}

fetchData();



