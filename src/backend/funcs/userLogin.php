<?php
    include '../access_control.php';
    include '../userCRUD.php';
    header("Access-Control-Allow-Origin: $AccessControlAllowOrigin");
    header("Access-Control-Allow-Methods: $AccessControlAllowMethods");

    $db = new userSrv();
    $result = $db -> checkPass($_POST['email'], $_POST['password']);
    if($result !== "failed to login") {
        $decodedResult = json_decode($result, true);
        session_start();
        $_SESSION['logName'] = $decodedResult['fname']." ".$decodedResult['lname'];
        $tmpReturn = [
            "user" => $decodedResult,
            "session_id" => session_id()
        ];
        echo json_encode($tmpReturn);
    } else {
        echo "false";
    }
?>