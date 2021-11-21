<?php
session_start();

$host="localhost";
$usuario="root";
$clave="miarka2020";
$basededatos="geopet";

$conn = new mysqli($host, $usuario, $clave, $basededatos);
mysqli_query($conn , "  SET character_set_result=utf8");
if($conn->connect_error){
    die("Database Error : " . $conn->connect_error);
}

$con = mysqli_connect($host, $usuario, $clave, $basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
die ("Conexion fallida: " . mysqli_connect_error());
}


 if (isset($_POST["login"])){
     if (!empty($_POST['correo_electronico']) && !empty($_POST['contrasena'])){
         $correo_electronico=$_POST['correo_electronico'];
         $contrasena =$_POST['contrasena'];

        $query = $connection ->prepare("SELECT * FROM cliente WHERE correo_electronico=:correo_electronico");
        $query->bindParam("correo_electronico", $correo_electronico, PDO::PARAM_STAR);
        $query-> execute();
        
        $result = $query->fetch (PDO::FETCH_ASSOC);

        if (!$result){
            echo "<p>La combinacion del usuario y la contraseña son inválidos!</p>";

        } else{
            if (password_verify($contrasena, $result['contrasena'])){
                $_SESSION['session_username'] =$correo_electronico;
              
            }
            else{
                $message= "Email de usuario o contraseña invalida";
            
            }
        }
    }
     else { 
         $message = 'Todos los campos son requeridos';
        }
}
     ?> 