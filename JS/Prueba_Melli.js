document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);

  document.querySelectorAll('.ver-producto-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.getElementById('modal-titulo').textContent = btn.getAttribute('data-titulo');
      document.getElementById('modal-img').src = btn.getAttribute('data-img');
      document.getElementById('modal-img').alt = btn.getAttribute('data-titulo');
      document.getElementById('modal-descripcion').textContent = btn.getAttribute('data-descripcion');
      document.getElementById('modal-precio').textContent = btn.getAttribute('data-precio');
      document.getElementById('modal-autor').textContent = btn.getAttribute('data-autor');
      document.getElementById('modal-lista').innerHTML = btn.getAttribute('data-lista');
    });
  });
});

