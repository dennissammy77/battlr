import React, { useEffect, useState } from 'react'
import YourBotArmy from '../components/YourBotArmy';
import Header from '../components/Header';

function MyBotArmy() {
  const [army, setArmy] = useState([]);

  // Fetch all bots on load
  useEffect(() => {
    fetch("http://localhost:3000/army")
      .then((res) => res.json())
      .then(setArmy)
      .catch((err) => console.error("Error fetching army:", err));
  }, []);
  // Remove bot from the army (does not delete)
  function removeFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
    alert("This bot has been released from your army")
  }
  // Remove bot from the army 
  function dischargeBot(botId) {
    fetch(`http://localhost:3000/army/${botId}`, {
      method: "DELETE",
    })
    .then((res) => {
      if (res.ok) {
        setArmy((prev) => prev.filter((bot) => bot.id !== botId));
        alert("This bot has been discharged from your army")
      } else {
        throw new Error("Failed to delete bot.");
      }
    })
    .catch((err) => console.error("Error discharging bot:", err));
  }
  return (
    <div className='container'>
      <Header />
      <p className='justify-center text-xl my-lg'>Welcome to **Bot Battlr**, the one and only spot in the known <br/>universe where you can custom build your own Bot Army! This is our app:</p>
      <YourBotArmy 
        army={army} 
        handleRemoveFromArmy={removeFromArmy} 
        handleDischargeBot={dischargeBot} 
      />
    </div>
  )
};

export default MyBotArmy;