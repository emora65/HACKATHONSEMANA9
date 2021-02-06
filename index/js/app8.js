// Una empresa importadora desea determinar cuántos dólares puede adquirir
//con equis cantidad de dinero peruano.

function compraDolares(soles,tipocambio){
    const cambio = soles/tipocambio;
    return `La cantidad de dolares es:  ${cambio}`

} 
   console.log(compraDolares(300,3.68));