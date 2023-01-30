# Aplicación de alquiler de series

Con la API creada en el anterior proyecto, he hecho el front-end de una aplicación de alquiler de series.

#Tecnologias usadas.
- ![Captura de pantalla_20230130_164805](https://user-images.githubusercontent.com/112971504/215524938-bd2c3bcc-7c78-4d74-9dff-4b8566dc9e8b.png) JavaScript.
- ![Captura de pantalla_20230130_165038](https://user-images.githubusercontent.com/112971504/215525694-09c173b4-46d5-4625-ac04-f53d844e77a1.png) React.
- ![Captura de pantalla_20230130_165152](https://user-images.githubusercontent.com/112971504/215525908-162c5954-c0b5-4905-aaa5-305e4a94fb65.png) CSS3.




## Vistas

Tiene 6 vistas en total:
- La vista home.
- ![Captura de pantalla_20230130_162712](https://user-images.githubusercontent.com/112971504/215520106-a7996ffd-f676-4a95-9de7-86161b1b42cc.png)

Hay un header con acceso a registrarse, logearse y un botón para cuando estás en otra vista volver a la página home. También es donde nos saldrán todas las series que haya en la base de datos.

- La vista de registro.
- ![Captura de pantalla_20230130_163007](https://user-images.githubusercontent.com/112971504/215520460-166e7518-e46e-4085-8d60-7664c17728f2.png)

En esta, hay un formulario donde se piden unos datos para hacer un resgistro de usuario. Hay control de errores, si los campos no se rellenan adecuadamente va a salir un mensaje en rojo indicando que tipo de error se está cometiendo.

- La vista del login.
- ![Captura de pantalla_20230130_163131](https://user-images.githubusercontent.com/112971504/215520818-06649075-78d4-4ad0-82ad-28858fb68c7a.png)

Aquí hay dos inputs para logearse, al igual que en el registro hay control de errores. Si no se escriben bien los campos no nos va a dejar logearnos.

- La vista del perfil de usuario.
- ![Captura de pantalla_20230130_163329](https://user-images.githubusercontent.com/112971504/215521271-d317b1aa-5db4-445e-8f25-acf275897f97.png)

En esta vista vista se nos muestran los datos del usuario y sus respectivas series ya alquiladas.

- La vista del detalle de la serie.
- ![Captura de pantalla_20230130_163457](https://user-images.githubusercontent.com/112971504/215521630-be9e73ba-b4bb-4fe7-aa71-04f324bb5368.png)

Accedemos a esta vista al hacer click sobre una serie desde home. Aqui nos salen detalles sobre la serie y solo si estamos logeados nos aparecerá un botón con la opción de alquilar la serie.
Si alquilamos la serie y se ha realizado con éxito, nos saldrá un mensaje abajo del btón indicando que el alquiler ha sido un éxito.

- La vista del Administrador.
- ![Captura de pantalla_20230130_163607](https://user-images.githubusercontent.com/112971504/215521820-5ef3d5b6-6445-469f-851b-9c8fb1a9aeb9.png)

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

