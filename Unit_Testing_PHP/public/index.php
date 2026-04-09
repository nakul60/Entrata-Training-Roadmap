<?php
require_once __DIR__ . '/../src/FeatureFlagService.php';

$flags = [
    'new_dashboard' => [
        'roles' => ['admin', 'beta'],
        'environments' => ['staging', 'production'],
        'rolloutPercentage' => 50
    ]
];

$result = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $service = new FeatureFlagService($flags);

    $result = $service->isEnabled(
        'new_dashboard',
        $_POST['role'],
        $_POST['environment'],
        (int)$_POST['userId']
    );
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Feature Flag Engine</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Feature Flag Evaluation</h2>

<form method="POST">
    <label>User ID</label>
    <input name="userId" type="number" required>

    <label>Role</label>
    <select name="role">
        <option value="admin">Admin</option>
        <option value="beta">Beta</option>
        <option value="user">User</option>
    </select>

    <label>Environment</label>
    <select name="environment">
        <option value="staging">Staging</option>
        <option value="production">Production</option>
    </select>

    <button type="submit">Check Feature</button>
</form>

<?php if ($result !== null): ?>
    <p class="<?= $result ? 'on' : 'off' ?>">
        <?= $result ? '✅ Feature Enabled' : '❌ Feature Disabled' ?>
    </p>
<?php endif; ?>

<script src="app.js"></script>
</body>
</html>