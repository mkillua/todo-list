import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      search: "",
      list: [],
    };
    this.refresh();
  }

  refresh() {
    axios
      .get(URL + "?sort=createdAt")
      .then((resp) => this.updateList(resp.data));
  }

  updateList(list) {
    this.setState({ ...this.state, description: "", list: list });
  }

  handleAdd() {
    axios
      .post(URL, { description: this.state.description })
      .then((resp) => this.refresh());
  }

  handleAddDescription(event) {
    this.setState({ ...this.state, description: event.target.value });
  }

  handleAddSearch(event) {
    this.setState({ ...this.state, search: event.target.value });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`).then((resp) => this.refresh());
  }

  handleFinish(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((resp) => this.refresh());
  }

  handleMakeAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((resp) => this.refresh());
  }

  handleSearch() {
    const url = this.state.search === '' ? URL : URL + `?sort=-createdAt&description__regex=/${this.state.search}/`
    axios
      .get(url)
      .then((resp) => this.updateList(resp.data));
  }


  render() {
    return (
      <div>
        <PageHeader title="tarefas" small="cadastre uma"></PageHeader>
        <TodoForm
          description={this.state.description}
          search={this.state.search}
          handleAdd={this.handleAdd.bind(this)}
          handleAddSearch={this.handleAddSearch.bind(this)}
          handleAddDescription={this.handleAddDescription.bind(this)}
          handleSearch={this.handleSearch.bind(this)}
        />
        <TodoList
          handleRemove={this.handleRemove.bind(this)}
          handleFinish={this.handleFinish.bind(this)}
          handlePending={this.handleMakeAsPending.bind(this)}
          list={this.state.list}
        ></TodoList>
      </div>
    );
  }
}
