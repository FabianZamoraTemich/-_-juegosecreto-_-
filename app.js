let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;



//en HTML se declara la función, en JS se llama a la función

function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;

}

function verificarIntento(){
  let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);


  if (numeroDeusuario === numeroSecreto){
         asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `)
         document.getElementById('reiniciar').removeAttribute('disabled');




  }else{
           //el usuario no acerto

         if(numeroDeusuario > numeroSecreto){

            asignarTextoElemento('p', 'El número secreto es menor');


         }else{
            asignarTextoElemento('p', 'El número secreto es mayor');

         }
         intentos++;
         limpiarcaja();



  }


  return;



}


function limpiarcaja(){

document.querySelector('#valorUsuario').value = '';

   





}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);

   console.log(listaNumeroSorteados);
   
   //si ya sorteamos todos lo numeros

   if (listaNumeroSorteados.length == numeroMaximo){
      asignarTextoElemento('p', 'Ya se sortearon los números posibles');
   } else { 



   }

  //si el número generado esta incluido en la lista



  if (listaNumeroSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto(); 

   }else{
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;

  }
   
      







}

function condicionesIniciales(){
   asignarTextoElemento('h1', 'Juego del número secreto!');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   

}

function reiniciarJuego(){
//limpiar la caja
limpiarcaja();


// incidar mensaje de intervalo de numeros

condicionesIniciales();


//Deshabilidar el botón de nuevo juego

document.querySelector("#reiniciar").setAttribute('disable', 'true');





}

condicionesIniciales();

