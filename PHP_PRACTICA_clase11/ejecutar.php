<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$edad = $_POST['edad'];
    if($nombre ===""){
        echo json_encode("nombre vacío");
    }else{
        echo json_encode("Correcto");
        //db
        $host = "localhost";
        $use = "root";
        $clave = "";
        $db = "universidad";
        $conexion = new PDO("mysql:host=$host;dbname=$db",$use,$clave);
        $sql = "INSERT INTO alumnos(nombre,apellido,email,edad) VALUES (?,?,?,?)";
        $stmt = $conexion ->prepare($sql);
        $stmt -> bindParam(1,$nombre,PDO::PARAM_STR);
        $stmt -> bindParam(2,$apellido,PDO::PARAM_STR);
        $stmt -> bindParam(3,$email,PDO::PARAM_STR);
        $stmt -> bindParam(4,$edad,PDO::PARAM_INT);
        $stmt->execute();
    }
   