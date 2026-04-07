<?php
session_start();
include 'config.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['username'];
            echo json_encode(["success" => true]);
            exit();
        } else {
            echo json_encode(["success" => false, "message" => "Incorrect password."]);
            exit();
        }
    } else {
        echo json_encode(["success" => false, "message" => "Username not found."]);
        exit();
    }
}
?>
