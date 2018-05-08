'use strict'

let num1=0;
let num2=0;
let resultado=0;
function opc(){
  
    let opcion=0;
    let SALIDA=4;
    do{
        
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
        num1=Number(prompt("primer numero"));
        num2=Number(prompt("segundo numero"));
        resta(num1,num2);
        alert("la resta es"+ resultado);
        break;
        case 3:  
        num1=Number(prompt("de que numero quieres la tabla?"));
        tabla(num1);
        alert("la tabla es\n"+ texto);
            break;
            case 4:  
            alert("adios");
            break;
            
        default:
        alert("pon una opcion");
        break;
        }
    }
 while (opcion!=SALIDA); 
    
}

function suma(num1,num2){

    resultado=num1+num2;
    return resultado;
    
  }

  function resta(num1,num2){

    resultado=num1+num2;
    return resultado;
    
  }

  function tabla(num1){
    var i;                      
    var texto = "";
    var j=num1;
    texto+='\
    <div class="row">\
    <div class="col-md-1">tabla del</div>\
    '
    ;
    texto+=j;
    for(i = 1 ; i < 11; i++)
    {
    texto+='<div class="col-md-1">';
    texto+=(j*i);
    texto+='</div>';
    }
    texto+='</div>';

    document.getElementById("palabra").innerHTML = texto; 

}

  