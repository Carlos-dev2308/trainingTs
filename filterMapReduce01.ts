const lista=[
    {nombre: "pantalon", categoria: "ropa", precio: 50},
    {nombre: "hamburguesa", categoria: "comida", precio: 20},
    {nombre: "mustang", categoria: "vehiculo", precio: 5000},
    {nombre: "camisa", categoria: "ropa", precio: 100},
]


const getList= lista.filter((ropa)=> ropa.categoria==="ropa").map((ropa)=> ropa.precio+(ropa.precio*0.10)).reduce((acc,obj)=>acc+obj);
console.log(getList);
