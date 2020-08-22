import React from 'react';
import TodoContext from '../contexts/TodoContext';
import Task from './Task';

class TodoList extends React.Component{
    //TODO: Access Content
    static contextType = TodoContext;
    

    render(){
        const {tasks, deleteTask} = this.context;
        
        return(
            <ul>
                {/* TODO: Render a 'task' component for each task stored in context */}
                {Object.values(tasks).map(task =>
                    <Task 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    />
                   )}
            </ul>
        );
    }
}

export default TodoList;

