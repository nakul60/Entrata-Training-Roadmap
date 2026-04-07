<?php
header("Content-Type: application/json");

$dbHost     = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName     = 'tour_packages';

$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

// Fetch the latest booking
$sql = "SELECT name, email, city, selected_spots, total_price, booking_date FROM bookings ORDER BY booking_date DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["error" => "No bookings found"]);
}

$conn->close();
?>
