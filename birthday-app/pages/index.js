import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Happy Birthday!</h1>
      <nav>
        <Link href="/wishes" legacyBehavior><a>View Wishes</a></Link>
        <Link href="/memory" legacyBehavior><a>View Memory</a></Link>
        <Link href="/reply" legacyBehavior><a>Reply Message</a></Link>
      </nav>
    </div>
  );
}
