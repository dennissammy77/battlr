import React from "react";

function BotCard({ bot, onClick }) {
  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>HP:</strong> {bot.health} | <strong>Damage:</strong> {bot.damage} | <strong>Armor:</strong> {bot.armor}</p>
      <p>"{bot.catchphrase}"</p>
    </div>
  );
}

export default BotCard;