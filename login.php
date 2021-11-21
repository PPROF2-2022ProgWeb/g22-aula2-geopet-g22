<?php
 require_once("includes/envio-contacto.php");
 include ("includes/header.php")
 session_start();

 if (isset($_POST["login"])){
     if (!empty($_POST['correo_electronico']) && !empty($_POST['contrasena'])){
         $username=$_POST['correo_electronico'];
         $password =$_POST['contrasena'];

        $query = $connection ->prepare("SELECT * FROM usuarios WHERE correo_electronico=:correo_electronico");
        $query->bindParam("correo_electronico", $username, PDO::PARAM_STAR);
        $query-> execute();
        
        $result = $query->fetch (PDO::FETCH_ASSOC);

        if (!$result){
            echo ´<p class = "error"> La combinacion del usuario y la contraseña son inválidos!´</p>:

        } else{
            if (password_verify($password, $result['contrasena'])){
                $_SESSION['session_username'] =$username;
                header("Location: perfilusuario.html");
            }
            else{
                $message= "Email de usuario o contraseña invalida";
            
            }
        }

     }
     else { 
         $message = 'Todos los campos son requeridos'
     }
     ?> 
     <div class="container mlogin">
         <div id="login">
             <h1> Autenticación de usuario </h1>

 }
