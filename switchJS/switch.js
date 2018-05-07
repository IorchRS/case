'use strict'

let anio;
let edad=0;
  




function dale(){
  
    let edad=Number(prompt("dame una edad"));
    
    switch(edad) {
        case 24:  
        alert("edad de Ramses");
         calcularnacimiento(edad);
            alert("su año de nacimiento"+anio+"es de Ramses");
          break;
        case 36:  
        alert("edad de Liz");
        
        alert("su año de nacimiento es de Liz");
          break;
    
          case 32:  // if (x === 'value1')
          alert("edad de rICARDO");
          calcularnacimiento();
          alert("su año de nacimiento es de RICARDO");
            break;
       
       
       
            default:
            alert("nadie tiene esa edad");
          break;
      }

}
  

function calcularnacimiento(edad){

    anio=2018-edad;
    return anio;
    
  }


  