import * as React from 'react';
import { Component } from 'react';
interface TodoItemsProps{
    entries:any;
    deleteItem:any;
}
class TodoItems extends Component<TodoItemsProps> {

  createTasks = (item:any) => {
		const { deleteItem } = this.props;
    return <li key={item.key} onClick={deleteItem.bind(this, item.key)}>{item.text}</li>;
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
export default TodoItems;