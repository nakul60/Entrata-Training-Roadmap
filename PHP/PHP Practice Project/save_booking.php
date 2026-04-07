<?php
$dbHost     = 'localhost';
$dbUsername = 'root'; 
$dbPassword = ''; 
$dbName     = 'tour_packages';

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$city = trim($_POST['city']);
$selectedSpots = trim($_POST['selectedSpots']);
$totalPrice = floatval($_POST['totalPrice']);

$stmt = $conn->prepare("INSERT INTO bookings (name, email, city, selected_spots, total_price) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssd", $name, $email, $city, $selectedSpots, $totalPrice);

if ($stmt->execute()) {
    header("Location: bill.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
