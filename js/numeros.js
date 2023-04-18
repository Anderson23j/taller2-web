let numeros
let numeroMayor
let numeroMenor
function GuardarNumeros(){
    numeros=[]
    var Nm1=Number.parseInt(document.getElementById("n1").value)
    var Nm2=Number.parseInt(document.getElementById("n2").value)
    var Nm3=Number.parseInt(document.getElementById("n3").value)
    var Nm4=Number.parseInt(document.getElementById("n4").value)
    numeros.push(Nm1)
    numeros.push(Nm2)
    numeros.push(Nm3)
    numeros.push(Nm4)
    if(new Set(numeros).size === numeros.length){
alert('Numeros ingresados')
calcularMayor()
calcularMenor()
EliminarMayor()
mostrarResultados()
console.log(numeroMayor+''+numeroMenor)
    }else{
        alert('No se puede usar números repetidos')
        numeros= []
    }
}

function calcularMayor(){
    numeroMayor = numeros[0]
    numeros.forEach(numeroActual => {
        if(numeroMayor<numeroActual){
            numeroMayor = numeroActual
        }
    });
}

function calcularMenor(){
 numeroMenor = numeros[0]
numeros.forEach(element => {
        if(numeroMenor>element){
            numeroMenor=element
        }
    });
}

function EliminarMayor(){
var posicion = numeros.indexOf(numeroMayor)
console.log(numeros)
numeros.splice(posicion, 1);
console.log(numeros)
}

function mostrarResultados(){
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `
    <h1>El número mayor es: ${numeroMayor}</h1>
    <h1>El número menor es: ${numeroMenor}</h1>
    `
}