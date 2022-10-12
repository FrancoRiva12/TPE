"use strict"



document.querySelector("#btn_agregar").addEventListener("click", agregar);

document.querySelector("#btn_agregarx3").addEventListener("click", agregarx3);

document.querySelector("#btn_vaciartabla").addEventListener("click", vaciartabla);


let listado_posiciones = [{
    cuando: "05/05",
    quien: "NATHY PELUSO",
    donde: "METROPOLITANO ROSARIO"
}, {
    cuando: "07/05",
    quien: "WOS",
    donde: "CLUB FLORESTA TUCUMAN"
}, {
    cuando: "04/06",
    quien: "CAZZU",
    donde: "PRIMAVERA SOUND 2022 BS AS",
}, {
    cuando: "26/08",
    quien: "ROSALIA",
    donde: "MOVISTAR ARENA BS AS"
}]

mostrar();

function agregar() {
    
    let input_cuando = document.querySelector("#input_cuando").value;

    let input_quien= document.querySelector("#input_quien").value;

    let input_donde = document.querySelector("#input_donde").value;

    let parrafo_alerta = document.querySelector("#alerta");

    let nuevo_item = {
        cuando: input_cuando,
        quien: input_quien,
        donde: input_donde,
    }
 
    if (input_cuando == "" || input_quien == " " || input_donde == "") {
        parrafo_alerta.innerHTML = "Nada para agregar."
    }
    else {
        listado_posiciones.push(nuevo_item);
        mostrar();
    }

}



function agregarx3() {
    const n=3;
    for(let i=0; i<n;i++){
        agregar();
    }

}



function vaciartabla() {
    tabladinamica.innerHTML = " ";
    listado_posiciones=[];
}



function mostrar() {

    let tabladinamica = document.querySelector("#tabladinamica");
    tabladinamica.innerHTML = "";
    for (let i = 0; i < listado_posiciones.length; i++) {
        tabladinamica.innerHTML +=
            "<tr>" +
            "<td>" + listado_posiciones[i].cuando + "</td>" +
            "<td>" + listado_posiciones[i].quien + "</td>" +
            "<td>" + listado_posiciones[i].donde + "</td>" +
            "</tr>";
    }
}

