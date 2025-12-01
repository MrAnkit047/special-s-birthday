import Link from 'next/link';

export default function Memory() {
  const photos = [
    "C:\Users\ACER\Downloads\iri 1.jpg",
    'https://via.placeholder.com/200x150?text=Photo+2',
  ];

  const videos = [
    // '/videos/video1.mp4', // Commented out as file not found
  ];

  return (
    <div className="container">
      <h1>Photo and Video Memories</h1>
      <nav>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/wishes" legacyBehavior><a>View Wishes</a></Link>
        <Link href="/reply" legacyBehavior><a>Reply Message</a></Link>
      </nav>

      <div>
        <h2>Photos</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`Photo ${i + 1}`} width={200} height={150} style={{borderRadius: '8px'}} />
          ))}
        </div>
      </div>

      <div style={{marginTop: '30px'}}>
        <h2>Videos</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {videos.map((src, i) => (
            <video key={i} controls width="320" height="240" style={{borderRadius: '8px'}}>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
    </div>
  );
}
