# Rebound Exercise - Asynchronous Code with Axios

Este proyecto es un ejercicio práctico de manejo de código asíncrono utilizando **Axios** en Node.js. A través de este proyecto, podrás aprender cómo realizar solicitudes HTTP a APIs externas y manejar respuestas de manera secuencial utilizando `fs` y `Axios`.

**Recuerda tener instalado [node](https://nodejs.org/en) en tu maquina**

## Descripción

En este ejercicio, primero trabajamos con un array de nombres de Pokémon para simular una búsqueda aleatoria utilizando Axios. Además, el proyecto accede a la API de **Random Data** para obtener datos aleatorios y luego muestra los resultados de tres URL específicas en la consola, de manera secuencial.

## Estructura del Proyecto

El proyecto incluye:

- Un archivo JSON que contiene URLs de la API de Random Data, configuradas para ser leídas desde el archivo principal.
- Un archivo principal `index.js` que realiza las siguientes tareas:
  - Selecciona un Pokémon aleatorio desde un array de nombres.
  - Carga URLs de una API externa (Random Data) desde un archivo JSON.
  - Utiliza **Axios** para realizar llamadas a cada URL y muestra las respuestas en consola de manera secuencial.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/soyNelsonValenzuela/ReboundExercise_S4-M6

2.	Accede al directorio del proyecto:
   ```
cd ReboundExercise_S4-M6
```

3.	Instala las dependencias necesarias:
   ```
npm install
```

## Uso

Para ejecutar el proyecto:
```
node index.js
```

## Dependencias

-	Axios: Se utiliza para realizar solicitudes HTTP a la API de Random Data.
-	fs: Para leer archivos externos, como el JSON de URLs.

## API Utilizada

Se utiliza la [API Random Data](https://random-data-api.com/documentation) para obtener datos aleatorios en formato JSON.
