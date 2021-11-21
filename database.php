<?php

    $host="localhost";
    $usuario="root";
    $clave="miarka2020";
    $basededatos="geopet";
    
    try {
        $conex = new PDO($host, $usuario, $clave, $basededatos);
    } catch (PDOException $e) {
        die('connection failed' . $e->getMesssage());
    }

?>