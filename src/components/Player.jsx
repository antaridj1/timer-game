import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [enteredplayerName, setPlayerName] = useState('');

  const playerName = useRef();

  const handleSubmit = () => {
    setPlayerName(playerName.current.value);
    playerName.current.value = ''
  }
  
  return (
    <section id="player">
      <h2>Welcome {enteredplayerName ?? "Unknown Player"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
