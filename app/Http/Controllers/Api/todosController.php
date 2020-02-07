<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\todo;

class todosController extends Controller
{
    public function index()
    {
        return todo::orderBy('completed', 'asc')->orderBy('TL_id', 'asc')->get();
    }

    public function store(Request $request)
    {

        $task = new todo;
        $task->todos = $request->todo;
        $task->save();
    }
    
    public function markDone(todo $id)
    {
        $id->completed = 1;
        $id->save();
        return $id;
        
    }

    public function markNotdone(todo $id)
    {
        $id->completed = 0;
        $id->save();
        return $id;
        
    }

    public function destroy(todo $id)
    {
       $id->delete();
    }
}
