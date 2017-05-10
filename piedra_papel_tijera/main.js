// 0 : piedras
// 1 : papel
// 2 : tijeras

// Parte 1 del Script
function computer(){
numerx = (Math.random() * 10)%3;
numero = Math.floor(numerx);
return numero;
}
function traduce(opcion){
if(opcion==0){
data="Piedras";
}
else if(opcion==1){
data="Papel";
}
else if(opcion==2){
data="Tijeras";
}
return data;
}
function me(opcion){

gamec = document.getElementById("game");
gamec.innerHTML="Iniciando ...";
gamec.innerHTML="";

// Parte 1 Para Piedras
compute = computer();

usuario=traduce(opcion);
computadora=traduce(compute);
gamec.innerHTML="Usuario : "+usuario+" vs Computadora : "+computadora;
// si el usuario es píedra y la computadora tijera
if(opcion==0 && compute ==2){
      gamec.innerHTML=gamec.innerHTML+"EL Usuario Gana";
}
// si el usuario es píedra y la computadora papel
else if(opcion==0 && compute==1){
      gamec.innerHTML=gamec.innerHTML+"La Computadora Gana";
}
// Parte 2 Para Papel
// si el usuario pone Papel y la computadora piedras
else if(opcion==1 && compute ==0){
gamec.innerHTML=gamec.innerHTML+"El Usuario Gana";
}
// si el usuario pone Papel y la computadora Tijeras
else if(opcion==1 && compute ==2){
      gamec.innerHTML=gamec.innerHTML+"La Computadora Gana";
}
// Parte 3 Para Tijeras
// si el usuario pone tijeras y la computadora piedras
else if(opcion==2 && compute==0){
      gamec.innerHTML=gamec.innerHTML+"La Computadora Gana";
}
// si el usuario pone tijeras y la computadora papel
else if(opcion==2&&compute==1){
      gamec.innerHTML=gamec.innerHTML+"El Usuario Gana";
}
// si Los dos Son Lo mismo
else {
      gamec.innerHTML=gamec.innerHTML+"Nadie Gana";
}

}
