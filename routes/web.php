<?php

use Ezegyfa\LaravelHelperMethods\Crm\Controllers\BlueAdminController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

$blueAdminController = new BlueAdminController();
$blueAdminController->initializeRoutes();