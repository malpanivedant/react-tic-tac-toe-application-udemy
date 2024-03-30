export default function GameOver({ winner, onResetGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p> {winner} is the winner!</p>}
      {!winner && <p> Draw!</p>}
      <p>
        <button onClick={onResetGame}>Play Again</button>
      </p>
    </div>
  );
}
