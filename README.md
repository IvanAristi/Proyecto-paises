Modelo de Datos y BD


En esta fase, se estableció el modelo de datos para representar la información de los países. Se creó la base de datos MongoDB con los siguientes atributos en el modelo:


![Modelo base de datos](/img/628138ce-6d34-465f-a4f5-5c617f2ee5ab.jpg);


Fase 1: Integración con la API GraphQL (countries.trevorblades)
Se implementó la integración con la API GraphQL (countries.trevorblades) para obtener información de los países. Se realizaron solicitudes para obtener datos como bandera, nombre del país y continente, que se utilizarán en el Frontend.

Detalles de la Implementación:
Se utilizaron las operaciones de consulta (query) de GraphQL para obtener datos específicos de los países.
Se aseguró la correcta manipulación de los datos recibidos para adaptarlos al modelo de datos de la base de datos MongoDB.



En esta fase, se han utilizado las siguientes tecnologías:

Modelo de Datos
MongoDB: Se eligió MongoDB como el sistema de gestión de base de datos NoSQL para almacenar la información de los países. MongoDB permite una estructura flexible para adaptarse al modelo de datos definido.
Base de Datos MongoDB
Mongoose: Se utilizó Mongoose, una biblioteca de modelado de objetos MongoDB para Node.js, para facilitar la interacción con la base de datos MongoDB. Mongoose proporciona una capa de abstracción sobre las operaciones de MongoDB.
Fase 2: Integración con las APIs (countries.trevorblades - GraphQL)
En esta fase, se han utilizado las siguientes tecnologías:

Integración con la API GraphQL (countries.trevorblades)
Node.js: Se ha utilizado Node.js como entorno de ejecución para el backend de la aplicación.
Express: Express se utilizó como el framework de Node.js para construir el servidor web que maneja las solicitudes y respuestas.

Apollo Server: Apollo Server se utilizó para implementar un servidor GraphQL en Node.js. Facilita la integración con la API GraphQL de countries.trevorblades.


como usar y ejecutar el proyecto:

clona este repositorio en tu maquina local, en la terminal git bash utilizando el comando:

git clone enlace para clonar el repositorio.


Abre una terminal en visual studio code y ejecuta npm install nodemon, luego ejecuta npm start para inicializar el servidor.

Abre una nueva terminal, luego ingresa a la carpeta FrontEnd; luego ejecuta npm i para instalar todas las dependencias y seguido de esto ejecuta npm run dev

Tendras corriendo tu aplicacion en tu navegador





