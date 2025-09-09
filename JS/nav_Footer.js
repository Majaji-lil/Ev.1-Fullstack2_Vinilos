window.onload = function () {
  document.getElementById("nav").innerHTML = navbar();
  document.getElementById("footer").innerHTML = footer();
}
function navbar() {
  return `<div class="nav-wrapper">
                <img src="../img/logo.png" alt="Logo Vinilo" class="logo-img">
                 <a href="../index.html" class="brand-logo">Retro Vibe</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../html/Productos.html">Productos</a></li>
                    <li><a href="../html/Blog.html">Blogs</a></li>
                    <li><a href="../html/Nosotros.html">Nosotros</a></li>
                    <li><a href="../html/Contacto.html">Contacto</a></li>
                    <li><a href="../html/carrito.html"><i class="material-icons">shopping_cart</i></a></li>
                </ul>
            </div>`
}
function footer() {
  return `
        <div class="cover-container">
          <div class="footer">
            <div class="col l6 s12">
              <h5 class="black-text">Footer Content</h5>
              <p class="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container black-text text-lighten-4 left-align">
            © 2025 Copyright Text
            <a class="black-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
        
        `
}
