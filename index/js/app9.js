//Una empresa que contrata personal requiere determinar la edad de las
//personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se
//les pregunta el año en que nacieron.

function calculoEdad(añoActual,añoNacimiento){
    const edad = añoActual-añoNacimiento;
    return `La edad de la persona es:  ${edad}`

} 
   console.log(calculoEdad(2021,1980));