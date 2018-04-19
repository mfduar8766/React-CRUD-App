import React, { Component } from 'react';
import './App.css';
import ProductItem from './Components/ProductItem';
import AddProduct from './Components/AddProduct';

const products = [
  {
    id: 0,
    name: 'Macbook Air',
    price: 1300
  },
  {
    id: 1,
    name: 'Macbook Pro',
    price: 1400
  },
  {
    id: 2,
    name: 'IMac',
    price: 2100
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

      componentDidMount() {
        const products = this.getProducts();
        this.setState({products});    
      }

      getProducts() {
        return this.state.products;
      }

      onAdd(name, price) {
        const products = this.getProducts();
        products.push({
          name,
          price
        });
          this.setState({products});
      }

      onDelete(name) {
        const products = this.getProducts();
        const filteredProducts = products.filter(product => {
          return product.name !== name;
        });  
          this.setState({products: filteredProducts});
      }

      onEditSubmit(name, price, OriginalID) {
        let products = this.getProducts();

        products = products.map(product => {
          if(product.id === OriginalID) {
            product.name = name;
            product.price = price;
          }
            return product;
        });
          this.setState({products});
      }
      
render() {
  return (
    <div className="App">
      <h1>Product Manager React CRUD App</h1>
      <AddProduct onAdd={this.onAdd}/>
        {
          this.state.products.map(product => {
            return (
                <ProductItem 
                  key={product.id}
                  {...product} 
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
            );
          })
        }    
    </div>
    );
  }
}

export default App;
