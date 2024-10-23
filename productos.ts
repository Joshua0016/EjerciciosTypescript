import promptSync from "prompt-sync";
const prompt = promptSync();


type Producto = {
    nombre : string,
    precio : number
}

const productos : Producto[] =[
    {nombre: "nevera", precio: 30000},
    {nombre: "estufa", precio: 25000},
    {nombre: "licuadora", precio: 5000}
]


const ListaProductos = (productos) =>{

    console.log("\nLista de productos con descuento de un 15 %, escriba el articulo que desea llevar\n");
    productos.forEach(productos =>{
        console.log(`${productos.nombre} precio$ ${productos.precio}`);
    })

    let input :string= prompt("Escriba el nombre del producto que desea comprar :");
    console.log("\n----FACTURA----");
    let SelecProduct = productos.find(productos => productos.nombre == input.toLowerCase());
    let descuento = 0.15  * SelecProduct.precio;
    console.log(`Artículo seleccionado: ${SelecProduct.nombre}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Total :${SelecProduct.precio - descuento}`);
}

ListaProductos(productos);