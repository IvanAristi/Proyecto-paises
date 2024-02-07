
# Página de Búsqueda de Países

####¡Bienvenido a nuestra página de búsqueda de países!


Esta aplicación web te permite explorar una amplia variedad de países de todo el mundo. Puedes buscar países por su nombre y ver su nombre y su respetiva bandera.

## Funcionalidades Principales

- Búsqueda de países por nombre.
- Visualización de banderas y datos demográficos de los países.
- Navegación intuitiva y fácil de usar.






#Modelo de Datos y BD


En esta fase, se estableció el modelo de datos para representar la información de los países. Se creó la base de datos MongoDB con los siguientes atributos en el modelo:


![Modelo base de datos](/img/imgMongo.png);


Fase 1: Integración con la API GraphQL (countries.trevorblades)
Se implementó la integración con la API GraphQL (countries.trevorblades) para obtener información de los países. Se realizaron solicitudes para obtener datos como bandera, nombre del país y continente, que se utilizarán en el Frontend.

##Detalles de la Implementación:
Se utilizaron las operaciones de consulta (query) de GraphQL para obtener datos específicos de los países.
Se aseguró la correcta manipulación de los datos recibidos para adaptarlos al modelo de datos de la base de datos MongoDB.



En esta fase, se han utilizado las siguientes tecnologías:

##Modelo de Datos mongoDB
MongoDB: Se eligió MongoDB como el sistema de gestión de base de datos NoSQL para almacenar la información de los países. MongoDB permite una estructura flexible para adaptarse al modelo de datos definido.
##Tecnologias utilizadas
###Mongoose:
 Se utilizó Mongoose, una biblioteca de modelado de objetos MongoDB para Node.js, para facilitar la interacción con la base de datos MongoDB. Mongoose proporciona una capa de abstracción sobre las operaciones de MongoDB.
Fase 2: Integración con las APIs (countries.trevorblades - GraphQL)
En esta fase, se han utilizado las siguientes tecnologías:

Integración con la API GraphQL (countries.trevorblades)

###Node.js:
 Se ha utilizado Node.js como entorno de ejecución para el backend de la aplicación.
Express: Express se utilizó como el framework de Node.js para construir el servidor web que maneja las solicitudes y respuestas.

###Apollo Server:
 Apollo Server se utilizó para implementar un servidor GraphQL en Node.js. Facilita la integración con la API GraphQL de countries.trevorblades.

###React:
Se utilizo react para construir interfaces de usuario, en este caso, para crear componentes reutilizables.

###useState:
 Es un hook de React que permite agregar estado a los componentes funcionales. Se utiliza aquí para manejar el estado de countries y searchTerm.

 ![pagina principal](/img/Home.png)

# Estrategia de Ramificación

En este proyecto, seguimos una convención específica para nombrar las ramas en nuestro flujo de trabajo. Esto nos ayuda a organizar y mantener la coherencia en el desarrollo de diferentes partes de la aplicación.

## Convención de Nombres de Ramas

- **FE/[número]**: Utilizamos el prefijo "FE/" seguido de un número para las ramas relacionadas con el desarrollo del frontend de la aplicación. Por ejemplo, "FE/001" podría ser una rama para una nueva funcionalidad o característica en el frontend.

- **BK/[número]**: El prefijo "BK/" seguido de un número se utiliza para las ramas relacionadas con el desarrollo del backend de la aplicación. Por ejemplo, "BK/001" podría ser una rama para implementar una nueva API o servicio en el backend.

- **BG/[número]**: Utilizamos el prefijo "BG/" seguido de un número para las ramas relacionadas con la gestión de la base de datos. Por ejemplo, "BG/001" podría ser una rama para realizar cambios en el esquema de la base de datos o para migraciones de datos.

## Uso

Cada vez que trabajemos en una nueva funcionalidad o corrección de errores, crearemos una nueva rama siguiendo esta convención de nombres. Esto nos ayuda a mantener un historial claro y organizado de los cambios realizados en el proyecto.

Es importante asegurarse de que cada rama esté asociada con una tarea específica o una funcionalidad del proyecto, lo que facilita la colaboración y el seguimiento del progreso.

Por favor, asegúrate de seguir esta convención al crear y nombrar nuevas ramas en el repositorio.



###como usar y ejecutar el proyecto:

clona este repositorio en tu maquina local, en la terminal git bash utilizando el comando:

git clone enlace para clonar el repositorio.


Abre una terminal en visual studio code y ejecuta npm install nodemon, luego ejecuta npm start para inicializar el servidor.

Abre una nueva terminal, luego ingresa a la carpeta FrontEnd; luego ejecuta npm i para instalar todas las dependencias y seguido de esto ejecuta npm run dev

#####Tendras corriendo tu aplicacion en tu navegador





