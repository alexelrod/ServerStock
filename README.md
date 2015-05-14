#Stock

ACTION STOCK 
## Instalación

```shell
  $ sudo git clone https://github.com/AlejandroRodrV/ServerStock.git
  $ cd ServerStock
  $ sudo npm install
```

## EJECUCION
 Si se desea lanzar el servidor basta con ingresar 
```shell
  $node server.js
```
o para tenerlo como servicio podemos usar pm2 primero debemos instalarlo y posteriormente lanzarlo
```shell
  $sudo npm install pm2 -g
  $pm2 start server.js
```

###Abrimos un navegador en http://localhost:8080/
