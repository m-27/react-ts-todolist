import * as React from 'react';
import './App.css';
import TodoItems from './TodoItems';
import TodoList from './TodoList';

interface AppState {
  currentItem:any;
  items: any;
}

class App extends React.Component<{},AppState> {
  inputElem = React.createRef();
  constructor(props: any){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text:'', 
        key:''
      },
    };
  }
  handleInput = (e:any) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  }
  addItem = (e:any) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: [...items],
        currentItem: { text: '', key: '' },
      });
    }
  }
  deleteItem = (key:any) => {
      const filteredItems = this.state.items.filter((item:any) => {
          return item.key !== key;
      });
      this.setState({
          items: filteredItems,
      });
  }

  
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} inputElem={this.inputElem} handleInput={this.handleInput} currentItem={this.state.currentItem}/>
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
