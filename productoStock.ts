type Product= [string, number, 'en stock'|'agotado']
let list: Product[] = [
    ['camisa', 25, 'agotado'],
    ['pantalon',30, 'en stock'],
    ['chaqueta',45, 'en stock'],
    ['camiseta',10, 'en stock'],
    ['short',5,'agotado']
]

const productStock= list.filter((obj)=> obj[3])
