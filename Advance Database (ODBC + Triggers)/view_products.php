<link rel="stylesheet" href="style.css">
<?php include 'db.php'; ?>

<h2>Products</h2>

<table border="1">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Stock</th>
</tr>

<?php
$res = odbc_exec($conn, "SELECT * FROM products");

while ($row = odbc_fetch_array($res)) {
    echo "<tr>
        <td>{$row['id']}</td>
        <td>{$row['name']}</td>
        <td>{$row['price']}</td>
        <td>{$row['stock']}</td>
    </tr>";
}
?>
</table>