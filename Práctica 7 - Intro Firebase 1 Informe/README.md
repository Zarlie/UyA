# Práctica 7 - Introducción a Firebase 1 Informe

Grupo 8 del Martes PE102:
Integrantes:
- Melissa Díaz Suárez
- Andrea Hernández Martín

A continuación, se muestran una serie de ejemplos con diversas funcionalidades de la base de datos de Firebase:

**· Base de datos antes de realizar cualquiera de las actualizaciones**
![Antes de actualizar base de datos](https://github.com/Zarlie/UyA/blob/master/Pr%C3%A1ctica%207%20-%20Intro%20Firebase%201%20Informe/imagenes/Captura%20inicial.png)


**· Modificaciones en los correos de los usuarios**
```
        buttonModificar.onclick = () => {
          referencia = database.ref('/usuarios/usuario1');
          referencia.update({
                correo: 'marta@gmail.com',
          });

          referencia = database.ref('/usuarios/usuario2');
          referencia.update({
                correo: 'marcos@gmail.com',
          });
        };
```
![Modificación de datos](https://github.com/Zarlie/UyA/blob/master/Pr%C3%A1ctica%207%20-%20Intro%20Firebase%201%20Informe/imagenes/Modificar%20correo.png)


**· Añadir nuevos usuarios**
```
 buttonNuevo.onclick = () => {
          referencia = database.ref('/usuarios/usuario3');
          referencia.set({
                nombre: 'Luke',
                correo: 'luke@gmail.com',
                edad: '19',
                sexo: 'Hombre'
          });

          referencia = database.ref('/usuarios/usuario4');
          referencia.set({
                nombre: 'Arya',
                correo: 'arya@gmail.com',
                edad: '18',
                sexo: 'Mujer'
          });
        };
```
![Nuevo usuario](https://github.com/Zarlie/UyA/blob/master/Pr%C3%A1ctica%207%20-%20Intro%20Firebase%201%20Informe/imagenes/Introducir%20nuevos%20usuarios.png)


**· Eliminación de un usuario**
```
        buttonEliminar.onclick = () => {
          referencia = database.ref('/usuarios/usuario3');
          referencia.remove();
        };
      
```
![Eliminar usuario](https://github.com/Zarlie/UyA/blob/master/Pr%C3%A1ctica%207%20-%20Intro%20Firebase%201%20Informe/imagenes/Eliminar%20usuario.png)



**· Mostrar contenido seleccionado de la base de datos**
```
        buttonMostrar.onclick = () => {
          // Se muestra el sexo del usuario 1
          referencia = database.ref('/usuarios/usuario1');
          referencia.on('value', snapshot => {
            console.log("Usuario 1: ", snapshot.val().sexo);
          });
          // Se muestra el nombre del usuario 4
          referencia = database.ref('/usuarios/usuario4/nombre');
          referencia.on('value', snapshot => {
            console.log("Usuario 4:",snapshot.val());
          });
          // Se muestran todos los datos dentro del nodo usuarios
          referencia = database.ref('/usuarios');
          referencia.on('value', snapshot => {
            console.log("Todos los usuarios: ", snapshot.val());
          });
        };
```
![Mostrar contenido](https://github.com/Zarlie/UyA/blob/master/Pr%C3%A1ctica%207%20-%20Intro%20Firebase%201%20Informe/imagenes/Mostrar%20.png)
