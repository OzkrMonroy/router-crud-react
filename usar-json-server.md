# Cómo usar JSON-Server

Para poder utilizar la herramienta de JSON-Server seguimos los siguientes pasos:

* Instalamos JSON-Server de forma global:
  ```
  npm i -g json-server
  ```
* Creamos un nuevo archivo al que llamaremos db.json. Dentro de dicho archivo colocamos los datos que tendrá nuestra base de datos.

* Como último paso debemos de posicionarnos en la raíz de nuestro proyecto para poder hacer uso del archivo anterior, y para ello en nuestra consola colocamos:
  ```
  json-server db.json -p 4000
  ```