// load-navbar.js

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido de navbar.html en el cuerpo del documento
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
});
