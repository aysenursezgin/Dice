
import React, { useState, useEffect } from "react";
import "./App.css";
import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";

const App = () => {
  const [dice1Face, setDice1Face] = useState(dice1);
  const [dice2Face, setDice2Face] = useState(dice2);
  const [result, setResult] = useState("");
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Computer");
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  useEffect(() => {
    const player1 = prompt("Player 1, please enter your name:");
    if (player1) setPlayer1Name(player1);

    const player2 = prompt("Player 2, please enter your name (optional):");
    if (player2) setPlayer2Name(player2);
  }, []);

  const rollDice = () => {
    const faces = [dice1, dice2, dice3, dice4, dice5, dice6];

    // Zarları karıştırmaya başla
    const interval = setInterval(() => {
      setDice1Face(faces[Math.floor(Math.random() * faces.length)]);
      setDice2Face(faces[Math.floor(Math.random() * faces.length)]);
    }, 150); // Her 100ms'de zar yüzlerini değiştir

    // 1 saniye sonra durdur ve sonucu hesapla
    setTimeout(() => {
      clearInterval(interval); // Karıştırmayı durdur

      const dice1Value = Math.floor(Math.random() * faces.length) + 1;
      const dice2Value = Math.floor(Math.random() * faces.length) + 1;

      setDice1Face(faces[dice1Value - 1]);
      setDice2Face(faces[dice2Value - 1]);

      if (dice1Value > dice2Value) {
        setResult(`${player1Name} Wins! 🎉`);
        setPlayer1Score(player1Score + 1);
      } else if (dice1Value < dice2Value) {
        setResult(`${player2Name} Wins! 🎉`);
        setPlayer2Score(player2Score + 1);
      } else {
        setResult("It's a Draw! 🤝");
      }
    }, 3000); // 1 saniye sonra durdur ve sonucu göster
  };

  const resetScores = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setResult("");
  };

  return (
    <div>
      <h1>World Series of Dice</h1>
      <div className="container">
        <div>
          <h3>{player1Name}</h3>
          <img src={dice1Face} alt={`${player1Name}'s Dice`} />
        </div>
        <div>
          <h3>{player2Name}</h3>
          <img src={dice2Face} alt={`${player2Name}'s Dice`} />
        </div>
      </div>
      <button onClick={rollDice}>Roll Dice</button>
      <h2>{result}</h2>
      <div className="scoreboard">
        <h2>Scoreboard</h2>
        <p>
          {player1Name}: {player1Score}
        </p>
        <p>
          {player2Name}: {player2Score}
        </p>
        <button onClick={resetScores} className="reset-button">
          Reset Scores
        </button>
      </div>
      <footer>
        <p>
          
        </p>
      </footer>
    </div>
  );
};

export default App;
