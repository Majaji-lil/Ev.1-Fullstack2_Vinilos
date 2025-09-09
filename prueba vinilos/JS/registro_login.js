function validarRegistro(e) {
    const nombre = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailConfirmacion = document.getElementById('emailConfirmacion').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordConfirmacion = document.getElementById('passwordConfirmacion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    if (nombre === "" || email === "" || emailConfirmacion === "" || password === "" || passwordConfirmacion === "" || telefono === "") {
        e.preventDefault();
        alert("POR FAVOR, COMPLETAR TODOS LOS CAMPOS ANTES DE CONTINUAR.");
    }
    if (!email.includes('@')) {
        e.preventDefault();
        alert("POR FAVOR, EL CORREO NO ES VALIDO. DEBE INCLUIR '@'.");
        return;
    }
    if (email !== emailConfirmacion) {
        e.preventDefault();
        alert("LOS CORREOS NO COINCIDEN. POR FAVOR, VERIFICAR.");
        return;
    }
    if (password !== passwordConfirmacion) {
        e.preventDefault();
        alert("LAS CONTRASEÑAS NO COINCIDEN. POR FAVOR, VERIFICAR.")
        return;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formRegistro');
    if (form) {
        form.addEventListener('submit', validarRegistro);
    }
});