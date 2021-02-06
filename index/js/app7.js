//Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
//Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas,
//pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a
//resolver el problema, determinando cuantas pulgadas debe pedir con base en
//los metros que requiere. (1 pulgada = 0.0254 m).


function conversionPulg(metros,pulg){
    const pulgadas = metros/pulg;
    return `Las medidas en pulgadas son:  ${pulgadas}`

} 
   console.log(conversionPulg(34,0.0254));