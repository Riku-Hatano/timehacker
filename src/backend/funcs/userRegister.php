<?php
    include '../access_control.php';
    include '../userCRUD.php';
    header("Access-Control-Allow-Origin: $AccessControlAllowOrigin");
    header("Access-Control-Allow-Methods: $AccessControlAllowMethods");

    $db = new userSrv();
    $result = $db -> insert($_POST['fname'], $_POST['lname'], $_POST['email'], $_POST['password']);
    echo $result;
?>