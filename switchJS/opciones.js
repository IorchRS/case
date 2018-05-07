'use strict'


let opcion=0;
let num1=0;
let num2=0;
let resultado=0;
function opc(){
    alert("entra");
                do{
                    alert("entra al do");
                    opcion=Number(prompt("Opciones\n elige una opcion\n 1.-suma de 2 numeros\n 2.-resta de 2 numeros\n 3.-tablas de 1 numero\n 4.-Salir")); 
                    switch(opcion) 
                    {
                    case 1:  
                    num1=Number(prompt("primer numero"));
                    num2=Number(prompt("segundo numero"));
                    suma(num1,num2);
                    alert("la suma es"+ resultado);
                    break;
                    case 2:  
                 
                    alert("opcion 2");
                    break;

                    case 3:  
                    alert("opcion3");
                    
                        break;
                    
                        case 4:  
                        alert("opcion3");
                        
                            break;
                        
                    default:
                    
                    break;
                    }
                 }
             while (opcion !=  4) {
                alert("Adios"); 
                break;
                }

}

function suma(num1,num2){

    resultado=num1+num2;
    return resultado;
    
  }


  