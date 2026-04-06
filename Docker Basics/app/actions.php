<?php
include 'db.php';

// INSERT
if (isset($_POST['add'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    pg_query($conn, "INSERT INTO users (name, phone, email) VALUES ('$name', '$phone', '$email')");
    header("Location: index.php");
}

// DELETE
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];

    pg_query($conn, "DELETE FROM users WHERE id=$id");
    header("Location: index.php");
}
?>
