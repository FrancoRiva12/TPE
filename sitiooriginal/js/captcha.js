"use strict";
let usuario = document.querySelector("#usuario");
let email = document.querySelector("#email");
let respuesta = document.querySelector("#respuesta");
let formCaptcha = document.querySelector("#form-captcha");



let btncaptcha = document.querySelector("#btn-captcha");
btncaptcha.addEventListener("click", validarcaptcha);



function validarcaptcha() {

    if (usuario.value === "" || email.value === "") {
        respuesta.innerHTML = "Revise que el nombre y el email esten escritos correctamente.";
    }



    else if (formCaptcha.value === "45") {
        respuesta.innerHTML = "¡Te registraste correctamente! te agardecemos y estate atento que pronto hay información adicional en tu correo y en la página.";


    }

    else {
        respuesta.innerHTML = "Captcha incorrecto, vuelva a intentarlo";
    }

}
