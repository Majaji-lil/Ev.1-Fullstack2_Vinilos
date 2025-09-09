document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("productos").innerHTML = renderProductos();
});

function renderProductos() {
  let html = '';
  productos.forEach(producto => {
    html += `
      <div class="row ">
      <div class="card-completa">
          <div class="card hovereable grey darken-3">
            <img src="${producto.img}" alt="imagenPortada" height="150px" width="150px">
            <span class="card-title">${producto.nombre}</span>
            <div class="card-content white-text card-flex">
                <div class="card-info">
                  <p>${producto.descripcion}</p>
                </div>
                <div class="card-lista">
                  <p>Precio: $${producto.precio}</p>
                  <ul>${producto.lista}</ul>
                </div>
              </div>
            <div class="btn-compra">
              <a href="producto.html?id=${producto.id}">Comprar</a>
            </div>
            </div>
            </div>
           </div>
        `;
  });
  return html;
}