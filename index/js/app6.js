// Determinar el sueldo semanal de un trabajador basándose en sus horas
//trabajadas y su salario de hora hombre.

function sueldoSemanal(dias,horas,costohora){
    const sueldo = dias*horas*costohora;
    return `Sueldo semanal ${sueldo}`

} 
   console.log(sueldoSemanal(6,8,25));