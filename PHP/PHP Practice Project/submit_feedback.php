<?php
$conn = new mysqli("localhost", "root", "", "smart_city_feedback");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $city = $_POST['city'];
    $rating = $_POST['rating'];
    $comment = $_POST['comment'];
    $date = date("Y-m-d");

    $sql = "INSERT INTO feedback (name, city, rating, comment, date)
            VALUES ('$name', '$city', '$rating', '$comment', '$date')";

if ($conn->query($sql) === TRUE) {
    header("Location: visitor.html");
    exit();
} else {
    echo json_encode(["error" => "Error: " . $conn->error]);
}
}

$conn->close();
?>
