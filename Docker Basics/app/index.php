<?php include 'db.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Docker PHP App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>User Form</h2>

<form method="POST" action="actions.php">
    <input type="text" name="name" placeholder="Name" required>
    <input type="text" name="phone" placeholder="Phone" required>
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit" name="add">Submit</button>
</form>

<h2>Entries</h2>

<table>
<tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Action</th>
</tr>

<?php
$result = pg_query($conn, "SELECT * FROM users");

while ($row = pg_fetch_assoc($result)) {
    echo "<tr>
        <td>{$row['name']}</td>
        <td>{$row['phone']}</td>
        <td>{$row['email']}</td>
        <td>
            <a href='actions.php?delete={$row['id']}'>Delete</a>
        </td>
    </tr>";
}
?>

</table>

</body>
</html>
