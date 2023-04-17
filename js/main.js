let productos = [];
let filas=0
let bt1 = document.getElementById("btn1");
let btn2=document.getElementById("bt2")

bt1.addEventListener('click', function arrayProductos() {
  let producto = {
    Produc: document.getElementById('pro').value,
    unidad: Number.parseInt(document.getElementById('uni').value),
    valor: Number.parseFloat(document.getElementById('val').value),

  };
  console.log(producto, 'productos');

  let Existe = false
  productos.forEach(element => {
    if(producto.Produc === element.Produc){
        Existe=true
    }
  });
  if(!Existe) {
    productos.push(producto)
    alert('Producto almacenado')
    var tabla=document.getElementById('table')
 for(filas;filas<productos.length;filas++){
  var row=`<tr>
  <td>${productos[filas].Produc}</td>
  <td>${productos[filas].unidad}</td>
  <td>${productos[filas].valor}</td>
  </tr>`
  tabla.innerHTML+=row
 }  
  }else{
    alert('¡Ya existe este producto!')
  }
  console.log(productos)

 
});

btn2.addEventListener("click",function(calcular){
  let totalaPagar=0
productos.forEach(element => {
 totalaPagar+=element.unidad*element.valor 
});

let result= document.getElementById('resultado')
result.innerHTML= "total a pagar"+totalaPagar
});

