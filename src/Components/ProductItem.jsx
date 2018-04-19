import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false };
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

        onDelete() {
            const {name, onDelete} = this.props;
            onDelete(name);
        }

        onEdit() {
            this.setState({isEdit: true});
        }

        onEditSubmit(event) {
            event.preventDefault();
            this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.id);
            this.setState({isEdit: false});
        }

render() { 
    const {name, price} = this.props;
    return (
        <div>
            {
                this.state.isEdit
                    ? (
                            <form onSubmit={this.onEditSubmit}>
                                <input ref={nameInput => this.nameInput = nameInput} 
                                placeholder="Add Product" 
                                defaultValue={name}/>
                                <input ref={priceInput => this.priceInput = priceInput} 
                                placeholder="Add Price" 
                                defaultValue={price}/>
                                <button>Save</button>
                            </form>
                        )
                    : (
                            <div>
                                <span>{name}</span>
                                {` | `}
                                <span>{price}</span>
                                {` | `}
                                <button onClick={this.onEdit}>Edit</button>
                                {` | `}
                                <button onClick={this.onDelete}>Delete</button>
                            </div>
                        )
            }
        </div>
        );
    }
}
 
export default ProductItem;