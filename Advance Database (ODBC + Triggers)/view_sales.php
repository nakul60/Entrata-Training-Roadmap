<link rel="stylesheet" href="style.css">
<?php include 'db.php'; ?>

<h3>Sales</h3>

<?php
$res = odbc_exec($conn, "SELECT * FROM sales");

while ($row = odbc_fetch_array($res)) {
    echo "Product ID: " . $row['product_id'] . 
         " | Qty: " . $row['quantity'] . 
         " | Total: " . $row['total_price'] . "<br>";
}
?>