alert('Bienvenido')

debugger
let confirmation = confirm("Desea hacer una Sumatoria?")


if(confirmation){
console.log("Su respuesta fue", confirmation)
console.warn("Considere que el Numero Sea < 20")
let date1 = parseInt(prompt("Hola Ingrese un Dato a Sumar:"))

for (let i = 0; i < date1; i++) {
   let sumatoria = date1 + i
   console.log("La Sumatoria es:", sumatoria)
   if (sumatoria === 20) {
      break
   }
}
} else{
   console.log("Su respuesta fue:",confirmation)
}
alert("Gracias por Usar este Algoritmo, Julian C. Mendoza")