import db from "../config/database.config.js";

export const getTodos = async function ()
{
    const todos = await db( 'todos' ).select( '*' );

    return todos;
}

export const getTodo = async function (id)
{
    const todo = await db( 'todos' ).first( '*' ).where('id', id);

    return todo;
}

export const createTodo = async function ( payload ) 
{
    const todo = await db("todos")
      .insert(payload)
      .returning(["id", "title", "description", "completed"]);

    return todo;
}

export const updateTodo = async function (id, payload )
{
    const todo = await db( 'todos' ).update( payload ).where('id', id).returning(['id', 'title', 'description', 'completed']);
    
    return todo;
}

export const deleteTodo = async function ( id )
{
    await db( 'todos' ).delete().where( { id: id } );
 }