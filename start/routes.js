'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/aluno', "AlunoController.store");
Route.get('/aluno', "AlunoController.index");
Route.get('/aluno:id', "AlunoController.show");
Route.put('/aluno:id', "AlunoController.update");
Route.put('/aluno/delete/:id', "AlunoController.delete");
