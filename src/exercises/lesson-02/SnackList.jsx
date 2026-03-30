export function SnackList() {
  const snacks = [
    { name: 'Popcorn', rank: 5 },
    { name: 'Yogurt', rank: 4 },
    { name: 'Potato Chips', rank: 3 },
    { name: 'Chocolate', rank: 2 },
    { name: 'Fruit', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack, index) => (
        <li key={index}>{snack.name}</li>
      ))}
    </ol>
  );
}
