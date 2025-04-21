// src/components/YourBotArmy.js
import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, handleRemoveFromArmy, handleDischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-collection">
        {army.map(bot => (
          <div key={bot.id} className="bot-card-wrapper">
            <BotCard bot={bot} army={army} onBotClick={() => handleRemoveFromArmy(bot)} />
            <button 
              className="discharge-button" 
              onClick={() => handleDischargeBot(bot.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
