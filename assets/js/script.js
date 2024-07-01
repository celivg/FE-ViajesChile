const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente");
})

$(".form-control").on("click", function ( ){
    $(this).css("color", "cyan");
})