function mostrar(id){

let guias = document.querySelectorAll(".guia");

guias.forEach(function(g){

g.style.display = "none";

});

document.getElementById(id).style.display = "block";

}
