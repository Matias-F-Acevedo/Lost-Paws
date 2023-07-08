# **🐾** Lost Paws **🐾**

Lost Paws es un proyecto basado en React con el objetivo de ayudar a encontrar animales perdidos. El propósito principal de esta aplicación es proporcionar una plataforma donde los usuarios puedan contactarse con los administradores de la página para que publiquen información sobre animales perdidos o encontrados, o también para facilitar el encuentro de alguno de ellos con sus dueños. A lo largo del proyecto, se aplicaron metodologías ágiles como Scrum y buenas prácticas de programación.

## Funcionalidades
* Visualización de Tarjetas: Los usuarios pueden ver tarjetas de animales perdidos en la página principal. Cada tarjeta muestra detalles como la raza de la mascota, la ubicación donde se perdió y la información de contacto.
* Edición y Publicación de Tarjetas (Admin): Los administradores tienen acceso para editar tarjetas existentes o publicar nuevas tarjetas de mascotas perdidas. Esto les permite mantener actualizada la información de la pagina.
* Seguridad de Acceso: Se implementa un sistema de control de acceso para garantizar que solo los administradores tengan los permisos necesarios para editar o publicar tarjetas de animales perdidos.
* Contexto de Usuario: Se utiliza un contexto global para almacenar el estado del usuario, lo que permite gestionar la autenticación y los permisos de manera eficiente en toda la aplicación.

## Tecnologías Utilizadas

El proyecto se ha desarrollado utilizando las siguientes tecnologías:
* React: librería open source de JavaScript utilizada para construir la interfaz de usuario de la aplicación.

* Context API: Característica de React utilizada para gestionar el estado global del usuario y los permisos de acceso.

* Hooks: Se utilizan hooks como useState, useEffect y useContext para gestionar el estado y el ciclo de vida de los componentes.

* Mock API: Donde creamos y utilizamos nuestro Backend de prueba.

* Fetch API: Se utiliza la Fetch API de JavaScript para realizar solicitudes a la API y obtener los datos de las tarjetas de animales perdidos.

* React router: Librería que nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación.

* React Icons: Pequeña librería que te permite añadir íconos (desde distintas librerías de íconos) a tus aplicaciones hechas con React.

* Firebase (Storage): Es una plataforma digital diseñada para facilitar el desarrollo de aplicaciones web y móviles de calidad de una forma rápida y eficiente. En nuestro caso fue utilizada para el almacenamiento de imágenes.

* SweetAlert: Es un plugin con el cual damos un aspecto profesional a los mensajes que lancemos a los usuarios acorde a las tendencias actuales.

* GitHub: Para la gestion del proyecto y control de versiones de código.

* CSS: Se utiliza CSS para el diseño y la presentación de la página.

## Requisitos Previos del Proyecto

 **Node.js**: Asegúrate de tener Node.js instalado en tu sistema.
    
**Gestor de paquetes npm**: npm es el gestor de paquetes de Node.js y generalmente se instala automáticamente junto con Node.js.

**Visual Studio Code** o cualquier editor de código.
  

## Instrucciones de instalación
1.  Abre el repositorio de GitHub.
    
2.  Haz clic en el botón "Code" o "Código" en la parte derecha del repositorio, justo encima de la lista de archivos. Esto te mostrará la URL del repositorio.
    
3.  Copia la URL del repositorio. Puedes hacerlo haciendo clic en el botón de copiar al lado de la URL o seleccionando y copiando manualmente la URL.
    
4.  Abre una terminal o línea de comandos en tu máquina local.
    
5.  Navega hasta el directorio en el que deseas clonar el repositorio. Puedes usar el comando `cd` seguido de la ruta del directorio.

7.  Ejecuta el siguiente comando para clonar el repositorio:

	`git clone URLdelRepositorio`
8. Presiona Enter para ejecutar el comando. Git comenzará a clonar el repositorio en tu máquina local. Verás una indicación del progreso y una vez finalizado, se creará un nuevo directorio con el nombre del repositorio.

9.  **Dependencias del proyecto**: Los proyectos de Node.js generalmente incluyen un archivo `package.json` que contiene una lista de dependencias necesarias para el proyecto. Una vez que hayas clonado el repositorio del proyecto en tu computadora, puedes instalar las dependencias ejecutando el siguiente comando en el directorio del proyecto:

    `npm install` 
    
    Esto instalará todas las dependencias necesarias según se especifique en el archivo `package.json`.



## Instrucciones de Ejecución

1.  Una vez completada la instalación de las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo:
	
	`npm run dev` 

	Este comando iniciará el servidor de desarrollo de Vite y comenzará a compilar y servir tu proyecto de React. Verás la URL del servidor en la terminal.

2.  Abre un navegador web y visita la URL que se muestra en la terminal. Por lo general, será algo como: `http://localhost:3000`.



## Uso del proyecto

* Al abrir la página de animales perdidos en tu navegador, se mostrará la lista de tarjetas de animales perdidos disponibles.
* Puedes desplazarte hacia abajo para explorar las diferentes tarjetas de animales perdidos. Cada tarjeta muestra información como la raza de la mascota, la ubicación donde se perdió y la información de contacto.
* Para iniciar sesión como administrador y acceder a la funcionalidades CRUD:
   * Haz clic en el botón "Iniciar sesión" ubicado en la parte superior derecha de la página.
   * Se mostrará un formulario de inicio de sesión. Ingresa tus credenciales de administrador ( user: admin123 y password: admin123 )y presiona el botón "Iniciar sesión".
* Después de iniciar sesión como administrador, verás dos cambios en la página:
   * En lugar de la lista de tarjetas de animales perdidos, se mostrará un mensaje de bienvenida junto con un botón de "Cerrar sesión" en la barra de navegación superior.
   * Las Cards de la sección principal se puede hacer click sobre ellas y despliega opciones adicionales de "Administración" que te permite acceder a la funcionalidad de edición y eliminación de tarjetas.
* Para editar una tarjeta existente:
	* Se abrirá un formulario de edición al haer click sobre la Card donde puedes modificar los detalles del animal perdido. Realiza los cambios necesarios y presiona el botón "Update" para guardar los cambios.
	
* Para publicar una nueva tarjeta de animal perdido:
   * Haz clic en el botón con el icono de crear en la página principal.
   * Se abrirá un formulario de publicación donde puedes ingresar los detalles del nuevo animal perdido. Completa todos los campos requeridos y presiona el botón "Create" para agregar la nueva tarjeta a la lista.
* Si deseas cerrar la sesión como administrador:
   * Haz clic en el botón "Log out" en la barra de navegación.
   * Serás redirigido nuevamente a la página principal donde podrás ver las tarjetas de animales perdidos como un usuario normal.
Recuerda que solo los administradores pueden realizar ediciones y publicaciones. Los usuarios normales pueden ver las tarjetas de animales perdidos pero no tienen acceso a la funcionalidad de edición.


 **🐾** Lost Paws **🐾**
 
**Integrantes del proyecto:** Francisco Almirón, Matias Cagliero, Sofia Belocchi ,Matias Acevedo.
