/* let h1 = document.getElementById("titulo");

let p = document.getElementsByClassName("parrafo1");
 */
/* let lista = document.getElementsByTagName("li"); 

console.log(lista[0].innerHTML);
console.log(lista[1].innerHTML);
console.log(lista[2].innerHTML); */

/* //Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre      = document.getElementById("personas");
//Array con la información a agregar
let personas   = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
 */

/* let pais = document.getElementById("ciudad");

let ciudades = ["Buenos Aires", "Mendoza", "Santa Fe", "Tucuman", "Salta", "Santiago"];

for (let index = 0; index < ciudades.length; index++) {
    const element = ciudades[index];
    let h2 = document.createElement("h2");
    h2.innerHTML = element;
    pais.appendChild(h2)
} */

const bebidas = [{ id: 1,  nombre: "Vino", precio: 170, stock: 10 },
                  {  id: 2,  nombre: "Coca", precio: 120, stock: 10 },
                  {  id: 3,  nombre: "Fernet"  , precio: 900, stock: 10},
                  {  id: 4,  nombre: "Cerveza" , precio: 145, stock: 10}];

for (const bebida of bebidas) {
    let contenedor = document.createElement("ul");
    contenedor.innerHTML = `<li> ID: ${bebida.id}</li> 
                            <p>  Producto: ${bebida.nombre}</p>
                            <b> $ ${bebida.precio}</b>
                            <br><p> Cantidad: <b class="stock">${bebida.stock}</b></p>`;
    document.body.appendChild(contenedor);
}