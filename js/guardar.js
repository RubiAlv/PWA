function guardar (){
    db.collection("usuario").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("lastname").value,
        correo: document.getElementById("name").value,
        contraseña: document.getElementById("password").value
    })
    .then((docRef) => {
        alert("Registro exitoso")
    })
    .catch((error) => {
        alert("error")
    });
}