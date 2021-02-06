//Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
//año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
//años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
//y represéntelo ,que permita determinar el bono que recibirá un trabajador

//const sueldo = 1000;
//const añoServicio = 5;

const añoServicio =Number(prompt("INGRESE AÑOS DE SERVICIO"));

   if(añoServicio==1){
       console.log('RECIBES UN BONO DE $100')
   }
   else if(añoServicio==2){
       console.log('RECIBES UN BONO DE $200')
   }
   else if(añoServicio==3){
       console.log('RECIBES UN BONO DE $300')
   }
   else if(añoServicio==4){
        console.log('RECIBES UN BONO DE $400')
   }
   else if(añoServicio==5){
        console.log('RECIBES UN BONO DE $500')
   }
   else{
       console.log('RECIBES UN BONO DE $1000')
   }
