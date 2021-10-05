import React, { Component } from 'react'
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const { todoList, onDelete, onEdit } = this.props;
    return (
      <div>
        {todoList.map((item) => {
          return <TodoListItem
            key={item.id}
            id={item.id}
            itemText={item.title}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        })}
      </div>
    )
  }
}

export default TodoList;
