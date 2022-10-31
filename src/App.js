import { useState, useEffect } from 'react'; //have to call Hooks inside of the component
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() {
  const [data, setData] = useState([{name: 'Colada', price: '40cents'}]) //first item is the getter (gets the data). Second item is the setter - changes the data.

  
  
  useEffect(() => {   //use effect runs when the component is doing. If the array is empty
    getCoffee()
  }, [])


  const getCoffee = () => {
    fetch("https://api.sampleapis.com/coffee/hot")
    .then(response=>response.json()) //each .then and .catch takes a callback function. This line converts to json.
    .then((data) => setData(data)) // get converted data
    .catch(x => console.error(x))

  }
  return (
    <div className="App">
      <main>
        <h1>Coffees by Sample API</h1>
        <button onClick={() => getCoffee()}>Get Me Coffees</button>
        <div className='menu-items'>
          {data.map((item) => {
            console.log('each item', item)
            return <SingleCoffee entireObject={item}/>
            })}
            </div>
        </main>
    </div>
  );
}

export default App;
