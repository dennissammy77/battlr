// src/components/BotCard.js
import React from "react";

function BotCard({ bot, army }) {
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
        alert("Bot added to your army backend:")
        console.log("Bot added to your army backend:",data)
        window.location.reload()
      })
      .catch(err => console.error(err));
    }
  }
  
  return (
    <div className="bot-card" onClick={() => addToArmy(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>HP:</strong> {bot.health} | <strong>Damage:</strong> {bot.damage} | <strong>Armor:</strong> {bot.armor}</p>
      <p>"{bot.catchphrase}"</p>
    </div>
  );
}

export default BotCard;