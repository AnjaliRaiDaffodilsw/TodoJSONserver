import React, { Component } from 'react'
import { connect } from 'react-redux';

import fetchData from '../api/fetchData';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';
import addData from '../api/addData';
import deleteData from '../api/deleteData';
import updateData from '../api/updateData';
import fetchDataWithId from '../api/fetchDataWithId';

class Todo extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  handleSubmit = (value) => {
    this.props.addData({ title: value });
    this.props.fetchData();
  }

  handleDelete = (id) => {
    this.props.deleteData(id);
    this.props.fetchData();
  }

  handleEdit = (value, id) => {
    this.props.updateData({ title: value }, id);
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <TodoListHeader />
        <AddTodo
          placeholderValue="Add To do"
          onSubmit={this.handleSubmit} />
        <TodoList
          todoList={this.props.items}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoList.items
  }
}

export default connect(mapStateToProps, { fetchData, addData, deleteData, updateData, fetchDataWithId })(Todo);
