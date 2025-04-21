import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onClick }) {
  return (
    <div>
      <h2 style={{margin:'20px 0px'}}>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;