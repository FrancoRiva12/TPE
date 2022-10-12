"use strict";
let usuario = document.querySelector("#usuario");
let email = document.querySelector("#email");
let respuesta = document.querySelector("#respuesta");
let formCaptcha = document.querySelector("#form-captcha");



let btncaptcha = document.querySelector("#btn-captcha");
btncaptcha.addEventListener("click", validarcaptcha);



function validarcaptcha() {

    if (usuario.value === "" || email.value === "") {
        respuesta.innerHTML = "Revise que el nombre y el email esten escritos.";
    }



    else if (formCaptcha.value === "4") {
        respuesta.innerHTML = "Te has registrado correctamente. Pronto obtendras información adicional de MadeInArgentina.";


    }

    else {
        respuesta.innerHTML = "Captcha incorrecto";
    }

}
