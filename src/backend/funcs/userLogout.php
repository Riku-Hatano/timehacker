<?php
    include '../access_control.php';
    include '../userCRUD.php';
    header("Access-Control-Allow-Origin: $AccessControlAllowOrigin");
    header("Access-Control-Allow-Methods: $AccessControlAllowMethods");
    
    session_id($_POST['session_id']);
    session_start();
    session_destroy();
    echo "session_id: ".$_POST['session_id']." "."name: ".$_SESSION['logName']." logout successfully!";
?>