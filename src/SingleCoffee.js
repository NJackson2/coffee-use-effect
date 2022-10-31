import { useState } from "react"

export default function SingleCoffee ({entireObject}) { // take out name, price, description - destructuring the props object. In essence we are creating variables out of the properties of the whole props object.
    const [favorite, setFavorite] = useState(false)
    // Example of destructuring below 
    //   const exampleProps = {
    //     description: "Black cup of coffee",
    //     name: "Cafe Cubano",
    //     price: "Mucho Mula"
    // }

    // const {description, name, price} = exampleProps 


    // console.log('props here->', name, price, description) // just to test we console.log. Props is the entire object
    return ( //inside of the return, onyl JSX is allowed (except for in curly braces)
        <div className="menu-items_item" style={{backgroundColor: favorite ? 'red' : 'white'}}>
        <img 
        src={entireObject.image}
        alt="Black coffee in a white porcelain cup" 
        />
        <div>
          <h3>{entireObject.name}</h3> 
          <span>Price: {entireObject.price}</span>
          <p>{entireObject.description}</p>
          <button onClick={() => setFavorite(!setFavorite)}>Favorite</button>
          {/* each single coffee gets to keep its own state */}
        </div>
      </div>
    )
}