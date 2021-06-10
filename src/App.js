import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const style = {
    color:"black",
    backgroundColor:"red"
  }
  const nayoks = ['Razzak', 'Salman', 'Sakib', 'Shuvo', 'Romio']
  const products = [
    {name:"PhotoShop", price:"$100"},
    {name:"Illustrator", price:"$80"},
    {name:"Animations", price:"$50"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p style={style}>My First React Application</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
    </ul>
    <ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
    </ul>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick = { () => setCount(count + 1) }> Increase </button>
      <button onClick = { () => setCount(count - 1) }> Decrease </button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic User Number : {users.length} </h3>
      <ul>
        {
          users.map(user=><li>{user.title}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    backgroundColor:"yellow",
    color:"red",
    border:"2px solid black",
    borderRadius:"5px"
  }
  console.log(props);
  return (
    <div style={productStyle}>
      <h1>Product:{props.product.name}</h1>
      <h3>Price:{props.product.price}</h3>
    </div>
  )
}
export default App;
