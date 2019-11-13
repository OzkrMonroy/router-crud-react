# Apis

* API = Application Programming Interface
* Son Funciones, métodos que ofrece una librería para ser utilizada por otro software como una capa de abstracción.
* Para acceder al servicio hay que enviar una petición estructurada.
* Ejemplo: Google Maps API.

## REST API's

* REST = Representational State Transfer
* Puede ser diseñada en cualquier lenguaje.
* REST describe como deben de ponerse a disposición los recursos.
* La API debe responder a los Request de HTTP: 
  ```
  GET, POST, PUT, PATCH, DELETE
  ```

* Cada API tiene sus propias reglas, métodos y estructuras.

## REST API Endpoints y Request

Una REST API cuenta con Endpoints (o urls) para poder realizar operaciones CRUD.

* Listar todos los clientes:
  ```
  GET -> /clientes
  ```
* Obtener un solo cliente:
  ```
  GET -> /clientes/id
  ```
* Crear un nuevo cliente:
  ```
  POST -> /clientes
  ```
* Editar un cliente:
  ```
  PUT -> /clientes/id
  ```
* Borrar un cliente:
  ```
  DELETE -> /clientes/id
  ```

## Consultar API's con React

Las 3 formas más comunes de consultar API's con React son:

* Fetch API y Ajax (nativo de JavaScript)
* Axios
* jQuery Ajax