<?php
namespace App\Controllers;

use App\Models\Post;

class PostController {
    public function getPosts() {
        $posts = [
            new Post("Hello World", "First post"),
            new Post("PHP Rocks", "Second post")
        ];

        return $posts;
    }
}