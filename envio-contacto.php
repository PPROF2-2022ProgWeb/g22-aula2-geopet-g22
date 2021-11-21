<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Geo Pet</title>
    <link rel="stylesheet" href="css/form-registro.css" />
    <link rel="shortcut icon" href="img/logo-geopet.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"><link rel="stylesheet" href="/index.css">
</head>
    <body>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top" >

            <div class="container-fluid">
                <div id="logo-nombre">
              <a class="navbar-brand" href="/index.html"><img src="img/logo geo pet.png" id="imagen-logo-header" width="168" height="76" alt=""></a>
              
                </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active " style='color:black' aria-current="page" href="/index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"style='color:black' href="/beneficios.html">Sobre GeoPet</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link"style='color:black' href="/contacto.html">Contactanos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" style='color:black' href="form-registro.html">Registro</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" style='color:black' href="/form-login.html">Login</a>
                    </li>
                    <li id="importante-link" class="nav-item">
                        <a class="nav-link resaltado-button" style='color:white; background-color: green; border-radius: 15px;' href="/suscripcion.html">Planes y suscripciones</a>
                      </li>
                  </ul>
                           
              </div>
            </div>
          </nav>
    </header>
    <main>
        <?php
            @$nombre = $_POST["nombre"];
            @$apellido = $_POST["apellido"];
            @$correo_electronico = $_POST["correo_electronico"];
            @$contrasena = $_POST["contrasena"];
            @$telefono = $_POST["telefono"];
            
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
            
            $db = mysqli_select_db($con, $basededatos) or die ("Ups!, no se ha podido conectar a la base de datos");
            $consulta = "INSERT INTO cliente VALUES (0 , '$nombre', '$apellido', '$correo_electronico', '$contrasena', 0)";
            
            if (mysqli_query ($con, $consulta)) {
                echo "<p>Registro agregado.</p>";
            } else {
                echo "<p>No se agregó nuevo registro</p>";
                echo "Error: " . $consulta . "<br>" . mysqli_error($con);
            }
            mysqli_close($con);
        
        ?>
    </main>
    <footer class="text-center footer-style">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-col">
                    <h4>Grupo 3</h4>
                    <h6>
                        Julieta Llanos <br />
                        Virginia Mercado<br />
                        Gustavo Ezequiel Miarka <br />
                        Rocio Zarate Calviño
                    </h6>
                </div>
                <div class="col-md-4 footer-col">
                    
                    <h4>Newsletter</h4>
                    <div class="input-group">
                         <input type="email" class="form-control" placeholder="Ingresa tu mail">
                         <span class="input-group-btn">
                         <button class="btn btn-outline-light" type="submit">Suscribirse</button>
                         </span>    
                         
                </div>
                <div id="bloque-redes-sociales">
                <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram social-media"  title="Instagram"></i></a> 
                <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook social-media" title="Facebook"></i></a> 
                <a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter social-media" title="Twitter"></i></a>               
            </div>       
                    </div>
                <div class="col-md-4 footer-col">
                    <h4>Geo pet</h4>
                    <h6>Sigue a tu amigo perruno o felino desde la comodidad de tu celular gracias Geo PET. Registra tu mascota con su número de Geotag para ver su ubicación exacta, en todo momento.</h6>
                </div>
            </div>
        </div>
    </footer>
    <script src="/js/funcionesGrupo2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>



