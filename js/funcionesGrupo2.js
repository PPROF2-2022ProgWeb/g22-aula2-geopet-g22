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

    