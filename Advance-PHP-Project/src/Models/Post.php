<?php
namespace App\Models;

class Post {
    private $title;
    private $content;

    public function __construct($title, $content) {
        $this->title = $title;
        $this->content = $content;
    }

    public function getTitle() {
        return $this->title;
    }

    //Magic Methods
    public function __get($name) {
    return $this->$name ?? null;
    }

    public function __set($name, $value) {
    $this->$name = $value;
    }
}