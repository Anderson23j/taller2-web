let productos = [];
let bt1 = document.getElementById("btn1");

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
  }else{
    alert('¡Ya existe este producto!')
  }
  console.log(productos)
});
