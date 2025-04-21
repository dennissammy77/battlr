import Header from '../components/Header';
import React, { useEffect, useState } from "react";
import BotCollection from "../components/BotCollection";

function Home() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch all bots on load
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then(setBots)
      .catch((err) => console.error("Error fetching bots:", err));
    fetch("http://localhost:3000/army")
      .then((res) => res.json())
      .then(setArmy)
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className='container'>
      <Header />
      <p className='justify-center text-xl my-lg'>Welcome to **Bot Battlr**, the one and only spot in the known <br/>universe where you can custom build your own Bot Army! This is our app:</p>
      <BotCollection 
        bots={bots} 
        army={army} 
      />
    </div>
  )
}

export default Home;