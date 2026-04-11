<link rel="stylesheet" href="style.css">
<?php
$conn = odbc_connect("inventory_pg", "postgres", "Shivam75#");

if (!$conn) {
    die("Connection failed!");
}
?>