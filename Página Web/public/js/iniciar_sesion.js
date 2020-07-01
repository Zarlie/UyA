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

const btnInicio = document.querySelector("#boton-inicio");
btnInicio.onclick = () => {
    let email = document.getElementById("email").value;
    let emailError = document.querySelector(".email-error");
    let contraseña = document.getElementById("password").value;
    let contraseñaError = document.querySelector(".password-error");

    if (contraseña === "") {
        if (email === "")
            emailError.textContent = "Debe introducir una dirección de correo electrónico";
        if (contraseña === "") 
             contraseñaError.textContent = "Debe intruducir una contraseña";
        return false;  
    }
    
    if (correosRegistrados.includes(email)) {
        window.location.href = "perfil_usuario.html";
        return false;
    }
};