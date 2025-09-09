document.addEventListener('DOMContentLoaded', function () {
    renderProducto();
});

function renderProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('id');
    const productoEncontrado = productos.find(p => p.id == producto);
    if (productoEncontrado) {
        document.getElementById("tituloProducto").innerText = productoEncontrado.nombre;
        document.getElementById('imgProducto').src = productoEncontrado.img;
        document.getElementById('descripcionProducto').textContent = productoEncontrado.descripcion;
        document.getElementById('valorProducto').textContent = `$${productoEncontrado.precio}`;
        document.getElementById('autorProducto').textContent = productoEncontrado.autor;
        document.getElementById('listaProducto').innerHTML = productoEncontrado.lista;
    }
}
