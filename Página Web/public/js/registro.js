// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNVQOMsDthxvGlRBESbp81pmidK8i5C7Q",
    authDomain: "proyecto-uya-6f226.firebaseapp.com",
    databaseURL: "https://proyecto-uya-6f226.firebaseio.com",
    projectId: "proyecto-uya-6f226",
    storageBucket: "proyecto-uya-6f226.appspot.com",
    messagingSenderId: "674348738363",
    appId: "1:674348738363:web:53a5a69f0710feb5fdf91e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Base de datos de los usuarios
usuarios = database.ref(`usuarios`);
const correosRegistrados = [];

usuarios.on("value", (snapshot) => {
    const users = snapshot.val();
    for (const i in users) {
        correosRegistrados.push(users[i].correo);
        console.log(correosRegistrados);
    }
});

// Proceso de registro
const btnRegistro = document.querySelector("#boton-registro");
btnRegistro.onclick = () => {
    let nombre = document.getElementById("first_name").value;
    let nombreError = document.querySelector(".first_name-error");
    let apellido = document.getElementById("last_name").value;
    let apellidoError = document.querySelector(".last_name-error");
    let email = document.getElementById("email").value;
    let emailError = document.querySelector(".email-error");
    let date = document.getElementById("date").value;
    let dateError = document.querySelector(".date-error");
    let sexo = document.getElementById("sexo").value;
    let sexoError = document.querySelector(".sexo-error");
    let contraseña = document.getElementById("password").value;
    let contraseñaError = document.querySelector(".password-error");
    let condiciones = document.getElementById("terms").value;
    let condicionesError = document.querySelector(".terms-error");

    // Comprobamos que no est" en blanco"
    if (nombre === "" || apellido === "" || sexo === "" || email === "" || contraseña === "" || date === "") {
        if (nombre === "") 
            nombreError.textContent = "Debe introducir su nombre";
        if (apellido === "")
            apellidoError.textContent = "Debe introducir su apellido";
        if (sexo === "")
            sexoError.textContent = "Debe indicar su sexo";
        if (date === "")
            dateError.textContent = "Debe introducir su fecha de nacimiento";
        if (email === "")
            emailError.textContent = "Debe introducir una dirección de correo electrónico";
        if (contraseña === "")
            contraseñaError.textContent = "Debe intruducir una contraseña";
        return false;  
    } 
 
    else {
        if (correosRegistrados.includes(email)) {
            alert("El correo electrónico que ha introducido ya está registrado. Pruebe con otro nuevo");
        } else {
            localStorage.setItem("email", email);
            usuarios.push().set({
                nombre: nombre,
                apellidos: apellido,
                sexo: sexo,
                fecha_de_nacimiento: date,
                correo: email,
                contraseña: contraseña
            });
            window.location.href = "perfil_usuario.html";
        }
        return false; 
    }
};