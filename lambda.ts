const listaProducto=[
    {nombre:"pepsi",precio:1.50,tipo:'bebida'},
    {nombre:"chuleta",precio:3,tipo:"alimento"},
    {nombre:"chaqueta",precio:10,tipo:"ropa"},
    {nombre:"camisa",precio:5,tipo:"ropa"},
    {nombre:"pantalon",precio:3,tipo:"ropa"}
]

const productoRopa= listaProducto.filter((producto)=>producto.tipo==="ropa").map(producto=>producto.precio*1.10).reduce((acumulator,currentValue)=>acumulator+currentValue,0);
console.log(productoRopa);

