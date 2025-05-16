function validacion(){
    const name = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('por favor, completa todos los campos.');
        event.preventDefault();
    }else{
        alert('¡formulario enviado correctamente!');
        return true;
    }
}