
# odata-poc-java-externa

## Acerca de y objetivo
Este proyecto es un ejemplo en [Olingo Java V4](http://olingo.apache.org/doc/odata4/index.html) de como tener como data source una api REST para poder bindearla a traves de OData.
Solamente esta implementada de esta forma la vista de detalle individual del set de objetos Cars que se muestra abajo.

### Tecnologías:
- NodeJS
- Java
- Express
- Olingo


## Configuración inicial
El proyecto esta desarrollado con Eclipse y dockerizado en sus 3 capas.
- DB
- Node - Express
- Olingo

## Ejecución
Se puede levantar el mismo estando situado en la carpeta *backendOdata* con

    docker-compose up

Y podemos probar el binding desde la siguiente url:
[http://localhost:8080/server/cars.svc/Cars(2)?\$format=json](http://localhost:8080/server/cars.svc/Cars(1)?$format=json)
    
## Referencias
- [Olingo Java V4](http://olingo.apache.org/doc/odata4/index.html)
