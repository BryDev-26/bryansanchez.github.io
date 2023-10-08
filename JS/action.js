/* Capturando los controles por id */
const form = document.getElementById('miFormulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const estado = document.getElementById('estado');
const sele = document.getElementById('sele');
const comentario = document.getElementById('comentario');
const check = document.getElementById('check');
const checkbox = document.getElementById('checkbox');
const nombreError = document.getElementById('nombreError');
const apellidoError = document.getElementById('apellidoError');
const emailError = document.getElementById('emailError');
const estadoError = document.getElementById('estadoError');
const selError = document.getElementById('selError');
const comError = document.getElementById('comError');
const checkError = document.getElementById('checkError');
const checkbError = document.getElementById('checkbError');
/* controlar el evento de mi formulario */
form.addEventListener('submit', function(event) {
    let esvalido = true;

    if (nombre.value.trim() === '') {
        nombreError.textContent = 'Debe ingresar sus nombres';
        esvalido = false;
    }else{
        nombreError.textContent='';
    }
    if (apellido.value.trim() === '') {
        apellidoError.textContent = 'Debe ingresar sus apellidos'
        esvalido = false
    }else{
        apellidoError.textContent = ''
    }
    if (email.value.trim() === '') {
        emailError.textContent = 'Debe ingresar un email';
        esvalido = false;
    }else{
        emailError.textContent='';
    }
    if(!document.querySelector('input[name="ec"]:checked')) {
        estadoError.textContent = 'Debe Selecionar';
        esvalido = false;
    }else{
        estadoError.textContent='';
    }
    if (sele.value === '') {
        selError.textContent = 'Debe seleccionar';
        esvalido = false;
    } else {
        selError.textContent = '';
    }
    if (comentario.value.trim() === '') {
        comError.textContent = 'Debe ingresar un comentario';
        esvalido = false;
    } else {
        comError.textContent = '';
    }
    if (!document.querySelector('input[name="checked"]:checked')) {
        checkError.textContent = 'Debes aceptar'
        esvalido = false;
    }else{
        checkError.textContent = ''
    }
    if (!document.querySelector('input[name="checkedbox"]:checked')) {
        checkbError.textContent = 'Debes aceptar'
        esvalido = false;
    }else{
        checkbError.textContent = ''
    }
    if(!esvalido){
        event.preventDefault();
    }
});

