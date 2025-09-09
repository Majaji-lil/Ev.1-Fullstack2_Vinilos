document.addEventListener('DOMContentLoaded', function () {

    const modales = document.querySelectorAll('.modal');
    M.Modal.init(modales);
    const listaModal = document.getElementById("carritoModal");
    const totalElemento = document.getElementById("totalModal");
    if (listaModal && totalElemento) {
        mostrarCarritoEnModal();
    }
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    M.toast({ html: `Producto agregado: ${producto.nombre}` });
    mostrarCarritoEnModal();
}


function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarritoEnModal();
    M.toast({ html: "Producto eliminado del carrito" });
}

function mostrarCarritoEnModal() {
    const lista = document.getElementById("carritoModal");
    const totalElemento = document.getElementById("totalModal");
    if (!lista || !totalElemento) return;
    lista.innerHTML = "";
    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}" width="50">
      <strong>${item.nombre}</strong> - $${item.precio} <em>(${item.autor})</em>
      <a class="btn-eliminar" onclick="eliminarDelCarrito(${index})"><i class="material-icons">delete_forever</i></a>
    `;
        lista.appendChild(li);
    });
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    totalElemento.textContent = total;
}

function agregarAlCarritoPorId(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        M.toast({ html: `Producto agregado: ${producto.nombre}` });
        mostrarCarritoEnModal();
    }
}