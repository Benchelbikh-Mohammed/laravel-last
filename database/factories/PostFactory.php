<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->title ,
        'slug' => $faker->unique()->slug ,
        'seo_title' => $faker->title ,
        'user_id' => factory(App\User::class) , 
        'image' => $faker->imageUrl($width, $height, 'cats'),
        'meta_description' => $faker->sentence($nbWords = 7, $variableNbWords = true) ,
        'meta_keywords' => $faker->words($nb = 3, $asText = true),
        'excerpt' => $faker->paragraph ,
        'body' =>$faker->text($maxNbChars = 200) ,
    ];
});
