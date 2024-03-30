export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        const { player, square } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}${col}`}>
            {player} selected {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
