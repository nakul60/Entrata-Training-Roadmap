<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Core\Router;

// Get full URI path
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove trailing slash
$uri = rtrim($uri, '/');

// 🔥 IMPORTANT: match your exact folder name
$base = '/Advance-PHP-Project/public';

// Remove base path
if (strpos($uri, $base) === 0) {
    $uri = substr($uri, strlen($base));
}

// If empty → home
if ($uri === '') {
    $uri = '/';
}

// Debug (optional)
// echo "URI: " . $uri;

Router::handle($uri);