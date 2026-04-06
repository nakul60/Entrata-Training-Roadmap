<?php
$conn = pg_connect("host=db dbname=mydb user=postgres password=postgres");

if (!$conn) {
    die("Connection failed");
}
?>
