import * as React from 'react';
import { Component } from 'react';

interface TodoListProps {
	addItem: any;
	inputElem:any;
	handleInput:any;
	currentItem:any;
}

class TodoList extends Component<TodoListProps, {}> {
	componentDidUpdate() {
    this.props.inputElem.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
						<input 
							placeholder="Task" 
							ref={this.props.inputElem}
							value={this.props.currentItem.text}
							onChange={this.props.handleInput}
						/>
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;