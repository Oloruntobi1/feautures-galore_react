import React from 'react';
import DeleteLastItem from "./DeleteLastItem"
import AddItem from "./AddItem"
import ShowItem from "./ShowItem"


class Item extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {

    
    return (
      <div className="Item">
        <header className="Item-header">
          <h1 className="Item-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        {/* <form addItemToList={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            ItemValue={this.state.value}
            handleChange={this.handleChange}
          />
          <button emptyInput={this.inputIsEmpty()}>Add</button>
        </form> */}

        <AddItem
        addItemToList={this.addItem}
        ItemValue={this.state.value}
        handleChange={this.handleChange}
        emptyInput={this.inputIsEmpty()}

        />

        {/* <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button> */}

        <DeleteLastItem deleteItem={this.deleteLastItem} disableButton={this.noItemsFound()}/>
        <p className="items">Items</p>
        {/* <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol> */}
        {this.state.items.map((item, index) => <ShowItem key={index} itemText={item} />)}
      </div>
    );
  }
}

export default Item;
