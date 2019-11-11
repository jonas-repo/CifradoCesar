///funcion comprueba si hay letras

function esLetra(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
///funcion comprueba si hay numeros
function esNumero(str)
{
  var regex=/^[0-9]+$/;
  if(str.match(regex))
      {       			
          return true;
      }
      else{
          alert("Debes ingresar la cantidad de saltos");
          return false;
      }
}
///funcion limpiar cajas
function limpiarCajas(){
  document.getElementById("etiqueta_resultado_descifrar").innerHTML = "";
  document.getElementById("resultado_descifrar").innerHTML = "";
  document.getElementById("etiqueta_resultado").innerHTML = "";
  document.getElementById("resultado_cifrar").innerHTML = "";
  document.getElementById("text_areaEncriptar").value = "";
  document.getElementById("text_areaDescifrar").value = "";
}


//funcion encriptarr*********************************************************
function funcion_cifrar() {

  var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var text_area_text = document.getElementById("text_areaEncriptar").value;
  var numero_de_saltos = parseInt(document.getElementById("numero_saltos").value);

  var texto_a_cifrar = text_area_text.toLowerCase();
  var texto_cifrado = "";

  if(esNumero(document.getElementById("numero_saltos").value))
  {
      for(var i=0; i < texto_a_cifrar.length; i++)
      {
          var caracter_actual = texto_a_cifrar[i];
          
          if(!esLetra(caracter_actual)){
              texto_cifrado += caracter_actual;
              continue;
          }
          else if(esLetra(caracter_actual))
          {
          
              for(var posicion=0; posicion < alfabeto.length; posicion++)
              {

                  if(caracter_actual == alfabeto[posicion])
                  {

                      if(posicion + numero_de_saltos > 25)
                      {
                          var suma_posicion = posicion + numero_de_saltos;
                          var posicion_nuevo_alfabeto = suma_posicion - 25;

                          texto_cifrado += alfabeto[posicion_nuevo_alfabeto - 1]; 
                      }
                      else
                      {
                      
                          texto_cifrado += alfabeto[posicion + numero_de_saltos];
                          break;
                      }
                  
                  }
              }
              continue;
          }
      }
      document.getElementById("etiqueta_resultado").innerHTML = "Texto encriptado";
      document.getElementById("resultado_cifrar").innerHTML = "";
      document.getElementById("resultado_cifrar").innerHTML = texto_cifrado;
  }				
}


//funcion descifrar*********************************************************
function funcion_descifrar() {

  var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var text_area_text = document.getElementById("text_areaDescifrar").value;
  var numero_de_saltos = parseInt(document.getElementById("numero_saltos").value);

  var texto_a_cifrar = text_area_text.toLowerCase();
  var texto_cifrado = "";


  if(esNumero(document.getElementById("numero_saltos").value))
  {


      for(var i=0; i < texto_a_cifrar.length; i++)
      {
          var caracter_actual = texto_a_cifrar[i];
      
          if(!esLetra(caracter_actual)){
              texto_cifrado += caracter_actual;
              continue;
          }
          else if(esLetra(caracter_actual))
          {
          
              for(var posicion=0; posicion < alfabeto.length; posicion++)
              {

                  if(caracter_actual == alfabeto[posicion])
                  {

                      if(posicion - numero_de_saltos < 0)
                      {
                          var suma_posicion = posicion - numero_de_saltos;
                          var posicion_nuevo_alfabeto = suma_posicion + 25;

                          texto_cifrado += alfabeto[posicion_nuevo_alfabeto + 1]; 
                      }
                      else
                      {
                      
                          texto_cifrado += alfabeto[posicion - numero_de_saltos];
                          break;
                      }
                  
                  }
              }
              continue;
          }
      }
      document.getElementById("etiqueta_resultado_descifrar").innerHTML = "Texto descifrado";
      document.getElementById("resultado_descifrar").innerHTML = "";
      document.getElementById("resultado_descifrar").innerHTML = texto_cifrado;
  }
}