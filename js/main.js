let producto = document.getElementById("pro")
let unidad = document.getElementById("uni")
let valor = document.getElementById("val")
let array = [producto,unidad,valor]

let bt1 = document.getElementById("btn1")

bt1.addEventListener('click', function(){
    let dup = array.push ([producto.value,unidad.value,valor.value])
    alert(dup)
    
})