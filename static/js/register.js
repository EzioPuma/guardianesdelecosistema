// register.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').value;

    // Crear objeto con los datos del registro
    const registerData = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "rol": rol
    };

    // Enviar los datos a la API
    fetch('http://3.90.210.94:8080/swagger-ui/index.html#/usuario-controller/saveUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData) // Convertir el objeto a JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').innerText = "Registro exitoso!";
            // Redireccionar o hacer otra acción después del registro exitoso
        } else {
            document.getElementById('message').innerText = "Error en el registro.";
        }
    })
    .catch(error => {
        console.error('Error al registrar:', error);
        document.getElementById('message').innerText = "Hubo un error en el servidor.";
    });
});
