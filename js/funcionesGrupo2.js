/* Función cálculo de edad*/
function calcularEdad(f1, f2){
  f2 = f2 || new Date();
  var diferencia = f2.getTime() - f1.getTime();
  return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
}
function mostrarEdad(){
  alert( "La edad de tu mascota es "+ calcularEdad(new Date(2019, 10, 5)) +" años."); 
  }

  /* Función alerta de eliminación de mascota*/

function eliminarMascota(){
  Swal.fire({
    title: '¿Estás seguro que querés eliminar esta mascota?',
    text: "Una vez eliminada, no podrás recuperar el registro.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado',
        'El registro de tu mascota fue eliminado',
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
