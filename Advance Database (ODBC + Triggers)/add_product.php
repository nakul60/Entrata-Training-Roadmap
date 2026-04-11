<link rel="stylesheet" href="style.css">
<?php include 'db.php'; ?>

<h2>Add Product</h2>

<form method="POST">
    <input type="text" name="name" placeholder="Product Name"><br>
    <input type="number" step="0.01" name="price" placeholder="Price"><br>
    <input type="number" name="stock" placeholder="Stock"><br>
    <button type="submit">Add</button>
</form>

<?php
if ($_POST) {
    $name = $_POST['name'];
    $price = $_POST['price'];
    $stock = $_POST['stock'];

    $sql = "INSERT INTO products (name, price, stock)
            VALUES ('$name', $price, $stock)";
    odbc_exec($conn, $sql);

    echo "<p>✅ Product Added!</p>";
}
?>