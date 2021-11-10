/* Función cálculo de edad*/
function calculadoraEdad(fecha){
    var hoy = new Date();
    var fechaNacimientoMascota = new Date (fecha)
    var edadMascota = hoy.getFullYear() - fechaNacimientoMascota.getFullYear();
    var meses = hoy.getMonth() -fechaNacimientoMascota.getMonth();
    if(meses <0 || m === 0 && hoy.getDate() < fechaNacimientoMascota.getDate()){
        edadMascota--
    }
    return edadMascota
}

document.getElementById("#boton-eliminar-mascota").onclick = function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

function comprobar() {
  var nombre = document.getElementById("inputnombre").value;
  var cumpleaños = document.getElementById("inputcumpleaños").value;
  var chip = document.getElementById("inputchip").value;
  var altura = document.getElementById("inputaltura").value;
  var peso = document.getElementById("inputpeso").value;
  if (nombre == "" || cumpleaños == "" || chip =="" || altura =="" || peso =="") {
      alert("Faltan completar campos!!"); 
  } else {
  alert("Operación exitosa, mascota registrada!!");
  }
}

function comprobar2() {
  var nombre = document.getElementById("inputnombre").value;
  var apellido = document.getElementById("inputapellido").value;
  var telefono = document.getElementById("inputtelefono").value;
  var mail = document.getElementById("inputmail").value;
  var password = document.getElementById("inputpassword").value;
  var password2 = document.getElementById("inputpassword2").value;
  if (nombre == "" || apellido == "" || telefono =="" || mail =="" || password =="" || password2=="") {
      alert("Faltan completar campos!!"); 
  } else if (password!=password2) {
    alert("Los campos de contraseña no coinciden!!");
  } else {
    alert("Operación exitosa, usuario registrado!!");
  }
}
