import { data } from "./data";
import { useState } from "react";
import './App.css';


function App() {

  const [hotels, setHotels] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeHotel=(id)=>{
    let newList = hotels.filter(hotelName=>hotelName.id !== id  )
  setHotels(newList)
  }
  return (
    <div>

      <div className="container">
        <h1>NYC TOP {hotels.length} HOTELS</h1>
      </div>
     
{hotels.map((element=>{
  const {id, hotelName, discription, image, source} = element;

  return(
    <div key={id}>
      <div className="container">
<h2>{id}-{hotelName}</h2>
      </div>
      <div className="container">
<p>{showMore ? discription : discription.substring(0, 220) + "..."}
<button onClick={()=>setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
</p>
      </div>
      <div className="container">
<img src={image} alt="bild" width="500px"/>
      </div>

      <div className="container">
<h5>{source}</h5>
      </div>
      <div className="container">
<button className="btn" onClick={()=>removeHotel(id)}>ROMOVE</button>
      </div>

    </div>
  )
}))

}
    </div>
  );
}

export default App;
