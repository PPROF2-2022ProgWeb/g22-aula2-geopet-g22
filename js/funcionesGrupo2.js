/* Función cálculo de edad*/
function calcularEdad(f1, f2) {
  f2 = f2 || new Date();
  var diferencia = f2.getTime() - f1.getTime();
  return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
}

function mostrarEdad() {
  alert("La edad de tu mascota es " + calcularEdad(new Date(2019, 10, 5)) + " años.");
}

/* Función alerta de eliminación de mascota*/

function eliminarMascota() {
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
  if (nombre == "" || cumpleaños == "" || chip == "" || altura == "" || peso == "") {
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
  if (nombre == "" || apellido == "" || telefono == "" || mail == "" || password == "" || password2 == "") {
    alert("Faltan completar campos!!");
  } else if (password != password2) {
    alert("Los campos de contraseña no coinciden!!");
  } else {
    alert("Operación exitosa, usuario registrado!!");
  }
}

function mostrarDatos() {
  var nombre1 = document.getElementById("nombre1")
  new URL(location.href).searchParams.get("name")
  var params = new URL(location.href).searchParams
  var nombre = params.get("name")
  nombre1.innerHTML = `Tu mascota se llama ${nombre}`

  var tipo1 = document.getElementById("tipo1")
  new URL(location.href).searchParams.get("tipo")
  var params = new URL(location.href).searchParams
  var tipo = params.get("tipo")
  tipo1.innerHTML = `${nombre} es un ${tipo} muy simpatico`

  var genero1 = document.getElementById("genero1")
  new URL(location.href).searchParams.get("genero")
  var params = new URL(location.href).searchParams
  var genero = params.get("genero")
  genero1.innerHTML = `${nombre} es ${genero}`

  var nacimiento = document.getElementById("nacimiento")
  new URL(location.href).searchParams.get("cumpleaños")
  var params = new URL(location.href).searchParams
  var cumpleaños = params.get("cumpleaños")
  nacimiento.innerHTML = `${nombre} nacio el ${cumpleaños}`

  var castrado1 = document.getElementById("castrado1")
  new URL(location.href).searchParams.get("castrado")
  var params = new URL(location.href).searchParams
  var castrado = params.get("castrado")
  castrado1.innerHTML = `${castrado} esta castrado`

  var chip1 = document.getElementById("chip1")
  new URL(location.href).searchParams.get("chip")
  var params = new URL(location.href).searchParams
  var chip = params.get("chip")
  chip1.innerHTML = `Su numero de identificacion es ${chip}`

  var peso1 = document.getElementById("peso1")
  new URL(location.href).searchParams.get("peso")
  var params = new URL(location.href).searchParams
  var peso = params.get("peso")
  peso1.innerHTML = `${nombre} pesa ${peso} kg`

  var altura1 = document.getElementById("altura1")
  new URL(location.href).searchParams.get("altura")
  var params = new URL(location.href).searchParams
  var altura = params.get("altura")
  altura1.innerHTML = `${nombre} mide ${altura} cm`
}
