import React, { useState } from "react";
import data from './data.js'
import Tours from './components/Tours.js'
const App = () => {
  const[tours,setTours]=useState(data)
  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }
  function removeTour(id){
      const newTours=tours.filter(tour => tour.id!==id);
      setTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="white-btn" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
          <Tours tours={tours} removeTour={removeTour} />     
    </div>
  );
};

export default App;
