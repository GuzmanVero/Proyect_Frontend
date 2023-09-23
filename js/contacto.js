function mensajeEnviado(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;
    
    var mensaje = "Nombre: " + name + "\nCorreo electrónico: " + address + "\nMensaje: " + message + "\nEl mensaje fue enviado correctamente.";
            alert(mensaje);
}