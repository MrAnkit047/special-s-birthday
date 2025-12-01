export default function Wishes() {
  const wishes = [
    "Happy Birthday, my love! Wishing you all the happiness in the world.",
    "May your birthday be filled with laughter and joy!",
    "To the most amazing girlfriend, happy birthday!",
  ];

  return (
    <div className="container">
      <h1>Birthday Wishes</h1>
      <nav>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/memory" legacyBehavior><a>View Memory</a></Link>
        <Link href="/reply" legacyBehavior><a>Reply Message</a></Link>
      </nav>
      <ul>
        {wishes.map((wish, index) => (
          <li key={index} style={{ margin: '20px 0', fontSize: '1.25em' }}>
            {wish}
          </li>
        ))}
      </ul>
    </div>
  );
}
