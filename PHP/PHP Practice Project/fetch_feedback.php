<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "smart_city_feedback");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$result = $conn->query("SELECT * FROM feedback ORDER BY date DESC");

$feedbackList = [];

while ($row = $result->fetch_assoc()) {
    $feedbackList[] = $row;
}

echo json_encode($feedbackList);

$conn->close();
?>
