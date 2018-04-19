import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

        onSubmitForm(event) {
            event.preventDefault();
            this.props.onAdd(this.nameInput.value, this.priceInput.value);
            this.nameInput.value = '';
            this.priceInput.value = '';
        }

render() { 
    return (
        <form onSubmit={this.onSubmitForm}>
            <h3>Add Product</h3>
            <input ref={nameInput => this.nameInput = nameInput} 
            placeholder="Add Product"/>
            <input ref={priceInput => this.priceInput = priceInput} 
            placeholder="Add Price"/>
            <button>Add</button>
            <hr/>
        </form>
        );
    }
}
 
export default AddProduct;