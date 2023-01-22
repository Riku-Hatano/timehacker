<?php
    include '../access_control.php';
    include '../userCRUD.php';
    header("Access-Control-Allow-Origin: $AccessControlAllowOrigin");
    header("Access-Control-Allow-Methods: $AccessControlAllowMethods");

    session_id($_POST['logUser']);
    session_start();
    echo $_SESSION['logName'];
?>