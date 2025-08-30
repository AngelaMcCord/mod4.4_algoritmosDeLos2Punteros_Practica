//El objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
  let inicio = 0;
  let siguiente = 1;

  while (siguiente < arr.length) {
    let inicial1 = arr[inicio].slice(0, 1);
    let inicial2 = arr[siguiente].slice(0, 1);

    if (inicial1 === inicial2) {
      //console.log(inicio, siguiente);
      return [arr[inicio], arr[siguiente]];
    }
    inicio++;
    siguiente++;
  }

  return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]


//Ejercicio de fuerza bruta
function fuerzaBruta(arr) {
  for (let i=0;i<arr.length;i++) {
    for (let j=i+1; j<arr.length;j++) {
      x = arr[i].charAt(0);
      y = arr[j].charAt(0);
        
      if (x==y){
        return `Los invitados ${arr[i]} y ${arr[j]} se sentarán al lado.`;
      }
    } 
  }
  return "No se encuentran datos";
}

console.log(fuerzaBruta(invitados));