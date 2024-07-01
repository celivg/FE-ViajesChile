const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarMsj").on("click", function () {
    alert("Tu mensaje fue enviado correctamente");
})

$(".form-control").on("click", function ( ){
    $(this).css("color", "cyan");
})