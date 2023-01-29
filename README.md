# Aplicación de alquiler de series

Con la API creada en el anterior proyecto, he hecho el front-end de una aplicación de alquiler de series. 

## Vistas

Tiene 6 vistas en total:
- La vista home.
Hay un header con acceso a registrarse, logearse y un botón para cuando estás en otra vista volver a la página home. También es donde nos saldrán todas las series que haya en la base de datos.

- La vista de registro.
En esta, hay un formulario donde se piden unos datos para hacer un resgistro de usuario. Hay control de errores, si los campos no se rellenan adecuadamente va a salir un mensaje en rojo indicando que tipo de error se está cometiendo.

- La vista del login.
Aquí hay dos inputs para logearse, al igual que en el registro hay control de errores. Si no se escriben bien los campos no nos va a dejar logearnos.

- La vista del perfil de usuario.
En esta vista vista se nos muestran los datos del usuario y sus respectivas series ya alquiladas.

- La vista del detalle de la serie.
Accedemos a esta vista al hacer click sobre una serie desde home. Aqui nos salen detalles sobre la serie y solo si estamos logeados nos aparecerá un botón con la opción de alquilar la serie.
Si alquilamos la serie y se ha realizado con éxito, nos saldrá un mensaje abajo del btón indicando que el alquiler ha sido un éxito.

- La vista del Administrador.
A esta vista solo se puede acceder siendo el administrador. Si al hacer el login, el token enviado recibe los datos correctos y el rol es administrador, al lado del nombre del usuario aparecerá la palabra 'Admin' que ésta es un link a su vista. En ella el administrador puede ver TODOS los alquileres realizados.


## Common

### en esta carpeta están diferentes elementos que vamos a utilizar en distintos sitios de la app.

- La CardSerie, por ejemplo, és un diseño de carta para ver las series en la vista home.

- El Header va a estar presente en todas las vistas de la app y nos va a servir para navegar entre vistas.

- El InputText és un input dónde vamos a escribir nuestros datos. En el header, la barra de búsqueda és un InpuText. Y en loggin y registro todos los campos a rellenar también lo son.

## Services

### ApiCalls

Desde Apicalls hacemos las llamadas que necesitemos a nuestra Api. Ya sea para registrarse, logearse hacer un alquiler...

### Útiles

Aqui tenemos funciones y constantes que nos van a ser útiles en la aplicación. Como por ejemplo los controles de errores y las rutas para acceder a los pósters de las series. 


## Jeroni Lorenzo Solano. 

