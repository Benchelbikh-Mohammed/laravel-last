<?php

namespace App\Http\Controllers;

// use App\User;
// use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $posts = DB::table('users')
            ->join('posts', 'users.id', '=', 'posts.user_id')
            ->select('users.name', 'posts.body')
            ->get();

        return Inertia::render('Dashboard/Index', [
            'posts' => $posts,
        ]);
    }
}
