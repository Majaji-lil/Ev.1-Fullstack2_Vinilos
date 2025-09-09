function validarContacto(e) {
    e.preventDefault();
    const nombre = document.getElementById('N_Completo').value.trim();
    const correo = document.getElementById('Correo').value.trim();
    const mensaje = document.getElementById('contenido').value.trim();
    if (nombre === '' || correo === '' || mensaje === '') {
        alert('POR FAVOR, COMPLETE TODOS LOS CAMPOS DEL FORMULARIO.');
        return;
    }
    if (!correo.includes('@')) {
        alert("POR FAVOR, INGRESE UN CORREO VÁLIDO.");
        return;
    }
    alert("!MENSAJE ENVIADO CORRECTAMENTE. PRONTO NOS PONDREMOS EN CONTACTO¡");
    e.target.submit();
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContacto');
    if (form) {
        form.addEventListener('submit', validarContacto);
    }
});