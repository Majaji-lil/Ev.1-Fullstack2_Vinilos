document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("productosDest").innerHTML = renderProductos();
});

function renderProductos() {
  let html = '';
  productos.forEach(producto => {
    html += `
    <div class="row">
      <div class="card-completa">
          <div class="card hovereable grey darken-3">
            <img src="${producto.img}" alt="imagenPortada" height="150px" width="150px">
            <span class="card-title">${producto.nombre}</span>
            <div class="card-content white-text card-flex">
                <div class="card-info">
                  <p>${producto.descripcion}</p>
                  
                </div>
                <div class="card-lista">
                <p>Autor: ${producto.autor}<p>
                <p>Precio: $${producto.precio}</p>
                  <ul>${producto.lista}</ul>
                </div>
              </div>
            <button class="btn-agregar" onclick="agregarAlCarritoPorId(${producto.id})">Agregar al carrito</button>
            <div class="btn-compra">
              <a href="html/producto.html?id=${producto.id}">Comprar</a>
            </div>
            </div>
            </div>
           </div>
        `;
  });
  return html;
}