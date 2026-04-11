<link rel="stylesheet" href="style.css">
<?php include 'db.php'; ?>

<form method="POST">
    Product ID: <input type="number" name="product_id"><br>
    Quantity: <input type="number" name="quantity"><br>
    <button type="submit">Sell</button>
</form>

<?php
if ($_POST) {
    $pid = $_POST['product_id'];
    $qty = $_POST['quantity'];

    // get price
    $res = odbc_exec($conn, "SELECT price FROM products WHERE id=$pid");
    $row = odbc_fetch_array($res);
    $price = $row['price'];

    // use SQL function
    $res2 = odbc_exec($conn,
        "SELECT calculate_total($price, $qty) AS total");
    $row2 = odbc_fetch_array($res2);
    $total = $row2['total'];

    // insert sale
    $sql = "INSERT INTO sales(product_id, quantity, total_price)
            VALUES ($pid, $qty, $total)";
    
    odbc_exec($conn, $sql);

    echo "Sale Done! Total: $total";
}
?>