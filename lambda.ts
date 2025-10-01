const listaProducto=[
    {nombre:"pepsi",precio:1.50,tipo:'bebida'},
    {nombre:"chuleta",precio:3,tipo:"alimento"},
    {nombre:"chaqueta",precio:10,tipo:"ropa"},
    {nombre:"camisa",precio:5,tipo:"ropa"},
    {nombre:"pantalon",precio:3,tipo:"ropa"}
]

const productoRopa= listaProducto.filter((producto)=>producto.tipo==="ropa").map(producto=>producto.precio*1.10).reduce((acumulator,currentValue)=>acumulator+currentValue,0);
console.log(productoRopa);

type Producto=[string,number,'agotado'|'en stock'];

const lista:Producto[] =[
    ["camisa", 50,'en stock'],
    ['pantalon',20,'agotado'],
    ['chaqueta',60,'en stock'],
    ['coca-cola',5,'en stock'],
    ['guante',10,'agotado']
]

let stock=(lista.sort((a,b)=>a[1]-b[1]).filter(producto=>producto[2]==='en stock').map(producto=>producto[0]+" "+producto[1]+'$'));
console.log(stock);



