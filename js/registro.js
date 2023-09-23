function registrase(){
    var nameuser = document.getElementById("nameuser").value;
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    
    
    var mensaje = "Nombre de usuario: " + nameuser + "\nNombre: " + name + "\nApellido: " + lastname + "\nSe registro exitosamente.";
            alert(mensaje);
}
