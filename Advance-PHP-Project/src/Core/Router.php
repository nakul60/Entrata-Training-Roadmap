<?php
namespace App\Core;

class Router {

    public static function handle($uri) {

        // Set JSON header for API responses
        header('Content-Type: application/json; charset=utf-8');

        if ($uri === '/api/posts') {
            self::getPosts();

        } elseif (strpos($uri, '/api/search') === 0) {
            self::searchPosts();

        } elseif ($uri === '/' || $uri === '') {
            self::homePage();

        } else {
            self::notFound($uri);
        }
    }

    /**
     * Get all posts endpoint
     */
    private static function getPosts() {
        $posts = [
            ['id' => 1, 'title' => 'Hello World', 'content' => 'First post'],
            ['id' => 2, 'title' => 'PHP is awesome', 'content' => 'PHP rocks'],
            ['id' => 3, 'title' => 'Learn Java', 'content' => 'Java guide'],
            ['id' => 4, 'title' => 'PHP Regex Guide', 'content' => 'Regex patterns']
        ];

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'data' => $posts,
            'message' => 'All posts retrieved successfully'
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    /**
     * Search posts endpoint
     */
    private static function searchPosts() {
        $query = $_GET['q'] ?? '';

        $posts = [
            "Hello World",
            "PHP is awesome",
            "Learn Java",
            "PHP Regex Guide"
        ];

        $results = [];

        if (empty($query)) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Search query parameter "q" is required'
            ], JSON_PRETTY_PRINT);
            return;
        }

        foreach ($posts as $post) {
            if (preg_match("/$query/i", $post)) {
                $results[] = $post;
            }
        }

        http_response_code(200);
        echo json_encode([
            'success' => true,
            'query' => $query,
            'count' => count($results),
            'data' => $results,
            'message' => count($results) > 0 ? 'Posts found' : 'No posts found'
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    /**
     * Home page
     */
    private static function homePage() {
        header('Content-Type: text/html; charset=utf-8');
        include __DIR__ . '/../../public/homepage.html';
    }

    /**
     * 404 Not Found
     */
    private static function notFound($uri) {
        http_response_code(404);
        echo json_encode([
            'success' => false,
            'error' => 'Route not found',
            'route' => $uri,
            'message' => 'The requested endpoint does not exist. Please check the documentation.'
        ], JSON_PRETTY_PRINT);
    }
}