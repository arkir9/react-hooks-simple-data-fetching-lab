// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage,setDogImage]=useState(null)
  const [isLoaded,setIsLoaded]= useState(false)
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res)=> res.json())
    .then((data)=>{
        setDogImage(data.message);
        setIsLoaded(true);
    })
  },[])
  if(!isLoaded) return <p>Loading...</p>
  return(
    <div>
    <h1>Random Dog Image: </h1>
    <img src={dogImage} alt="A Random Dog" />
    </div>
  )
}

export default App;
