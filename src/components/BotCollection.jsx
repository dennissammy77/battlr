import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, army }) {
  return (
    <div>
      <h2 style={{margin:'20px 0px'}}>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            army={army} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;