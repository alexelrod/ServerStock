#DESCRIPCION

La carpeta que contiene todo es ServerStock dentro de esta se encuentra el script principal que es server.js desde acá solo ruteo con express para que pueda consumirse el recurso de datos a mostrar, y agrego solo los módulos para poder usarlos ,tengo 3 módulos principales que se encuentran en la carpeta /server/controlers estos son los que controlan la parte del servidor, para consumir la APi 

###getController.js 
Donde  uso client-request con promises ,cada vez que es llamado este ingresa los valores obtenidos en nuestra base de datos , este pasara los datos a mi modelo para ir ingresando cada objeto capturado así como el Parseo a JSon ,este modulo es llamado por eventos.js

###eventos.js
Como su nombre lo indica maneja por eventos a el modulo de getController,cada 10 segundos este ejecuta.

###updtController.js

Este modulo es el que controla nuestro data binding ,desde angular JS hacemos una peticion a nuestra api con get y le pasamos el ultimo objeto de nuestro SCHEMA 

En  la carpeta model esta mi modelo o schema ,este solo crea un documento con  5 valores de los cuales uno de ellos trae dentro mas objetos es por esto que solo declaro los primeros 5 valores para que cuando se igrese el objeto json a nuestro schema este se modele con los datos que contiene, de igual forma declaro funciones de insercion y de lectura las cuales son llamadas desde mi controlador del lado del servidor para responder las peticiones get. la funcion createStock crea un nuevo Documento que es llamado desde getControllers llamado desde evento,asi como tambien define un metodo de conteo para ubicar siempre al ultimo elemento ingresado.

La funcion updateLastStock se encarga de regresar el ultio elemnto de nuestra base de datos ,si existe un problema imprime e consola el error ,asi tambien al tener los datos requeridos ,armamos un nuevo json evitando enviar todos los datos de nuestros objetos ya que seria inecesario dado que solo usaremos pocos datos.


En la carpeta Public se encuentra lo referente a la parte de la pagina web 
use el framework Foundation 5 para hacer la pagina responsiva, que esta contenido en la carpeta public/foundation dentro de esta se encuentran los estilos  /css que se han modificado para darle un aspecto individual a la pagina asi como normalize.css para normalizar primero la pagina ,en /img se encuentran recursos de imagenes 
,en public/js/app se encuentra lo que angular trabaja como controlador y modelo ,donde en js/app declaramos nuestras dependencias y nuestros modulos,los cuales son encargados de hacer una peticion get a express esperando la respuesta con promesas para poder mostrar los resultados en nuestro DOM se creo una funcion callAtInterval que esta es ejecutada cada 5 segundos y obtiene los datos con $http desde el servidor donde el objeto recibido se descompoe para asignarse cada dato a nuestro scopey solo se muestra en nuestro DOM ,se decidio no usar ng-repeat como directiva para poder estilizar de manera independiente cada resultado y manejarlo de una forma mas fluida.
para comprobar que los datos son obtenidos por nuestra api declarada con epress podemos tipear http://localhost:8080/api/updt
nos devolvera un objeto json ,este es el que se desompone para ser usado en nuestro scope.
dentro de esta misma carptea /js tenemos 404.html y index.html

404 es para surtir una pagina estatica de una peticion invalida,dando pocos detalles de la solicitud y arrojando un 404 como codigo de error.

index.html es la pagina ecargada de mostrar todos los datos como ya se menciono se uso el frame Foundation 5 para hacer la pagina responsiva y solo mostramos una pequeña tabla comparativa y los datos independientes de cada compañia cada vez que se realiza la peticion get ,se muestra la fecha de la solicitud a la APi de yahoo este dato es guardado en nuestra base de datos y es enviado a nuestro DOM para verificar que en efecto se obtienen datos en tiempo real.



##FLUJO 
el flujo esta conforme me lo pediste consumir la api de yahoo guardarlo todo el objeto en la base de datos 
consultar desde node una direccion web--> carpeta / server/controllers  archivos--> getController.js eventos.js updtControllers.js

Guardar los datos obtenidos todos en una colecion mongo --> carpeta /server/models archivos -->stochModels.js

Mostrar los datos en una pagina web
 Controlador y modelo -->/public/js/app  archivos --> app.js   controller.js
frontend index y 404 ----->public/js/   archivos -->index.html 404.html
ruteo y manejo de modularidad desde el archivo principal ---> server.js


Como puedes ver use Mongo,Expres,Node,Angular y foundation 5 
  




