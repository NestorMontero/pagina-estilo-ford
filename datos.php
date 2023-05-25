<?php
    //var_dump('<pre>');
    //var_dump($_POST);
    //var_dump('</pre>');
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $pais = $_POST['pais']

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>archivos en PHP</title>
</head>
<body>
    <h1>Muchas gracias <?php echo $nombre.' '.$apellido ?> </h1>
    <h2>pronto nos comunicaremos con usted</h2>
    <hr>
    <a href="./index.html">inicio</a>
</body>
</html>