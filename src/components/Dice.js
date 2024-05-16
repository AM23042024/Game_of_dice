import React, { useState } from "react";
import "./Dice.css";

function Dice() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newDiceValue);
  };

  return (
    <div className="dice-container">
      <img
        src={`images/dice-${diceValue}.png`}
        alt={`Кубик показывает ${diceValue}`}
      />
      <button onClick={rollDice}>Бросить кубик</button>
    </div>
  );
}

export default Dice;
