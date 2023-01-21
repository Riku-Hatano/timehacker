<?php
    // include 'db_config.php';

    class userSrv {
        function __construct() {
            $this -> conn = new mysqli('localhost', 'root', '', 'sks');
            // i will work with it later. when i tried to create instance with variable from db_config.php, undefined variable error happened.
        }

        function insert($fname, $lname, $email, $pw) {
            $isRegisterd = $this -> conn -> query("SELECT * FROM user_tb WHERE fname = '$fname' and lname = '$lname' and email = '$email'");
            // this is the qurey for checking if incomming register user is already existed.
            // if there is no user whose fname, lname and email is same, then incomming register user would be registerd.

            if($isRegisterd -> num_rows == 0) {
                $pass = password_hash($pw, PASSWORD_DEFAULT);
                $regCmd = "INSERT INTO user_tb (fname, lname, email, pass) VALUES ('$fname', '$lname', '$email', '$pass')";
                if($this -> conn -> query($regCmd)) {
                    return "user registerd";
                } else {
                    return "failed to register";
                }
            } else {
                return "you are already registerd!";
            }
        }

        function checkPass($email, $pass) {
            $tmpRow = $this -> conn -> query("SELECT * FROM user_tb");
            $tmpBox = [];
            for($i = 0 ; $i < $tmpRow -> num_rows ; $i++) {
                array_push($tmpBox, $tmpRow -> fetch_assoc());
            }
            foreach($tmpBox as $user) {
                if(password_verify($pass, $user['pass']) && $email == $user['email']) {
                    return json_encode($user);
                    break;
                }
            }
            return "failed to login";
        }

    }
?>