function validarLogin(e) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        e.preventDefault();
        alert("POR FAVOR, COMPLETAR TODOS LOS CAMPOS ANTES DE CONTINUAR.");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', validarLogin);
});