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

  // Add a bot to the army (only once)
  function addToArmy(bot) {
    const alreadyInArmy = army.find(b => b.id === bot.id);
  
    if (!alreadyInArmy) {  
      // Persist in backend
      fetch("http://localhost:3000/army", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bot)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to add bot to army");
        }
        return res.json();
      })
      .then(data =>{        
        alert("Bot added to your army")
        console.log("Bot added to your army:",data)
        window.location.reload()
      })
      .catch(err => console.error(err));
    }else{
      alert("This bot already exists in your army")
    }
  }

  return (
    <div className='container'>
      <Header />
      <p className='justify-center text-xl my-lg'>Welcome to **Bot Battlr**, the one and only spot in the known <br/>universe where you can custom build your own Bot Army! This is our app:</p>
      <BotCollection 
        bots={bots} 
        army={army}
        onClick={addToArmy}
      />
    </div>
  )
}

export default Home;