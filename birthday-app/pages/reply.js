import Link from 'next/link';
import { useState } from 'react';

export default function Reply() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mgevdwzb', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (res.ok) {
        setStatus('Message sent! Thank you for your wishes.');
        form.reset();
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('Form submission failed:', res.status, res.statusText, errorData);
        setStatus(`Oops! There was a problem sending your message. Error: ${res.status} ${res.statusText}`);
      }
    } catch (error) {
      console.error('Network error during form submission:', error);
      setStatus('Oops! There was a network problem. Please check your connection and try again.');
    }
  };

  return (
    <div className="container">
      <h1>Reply Message</h1>
      <nav>
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/wishes" legacyBehavior><a>View Wishes</a></Link>
        <Link href="/memory" legacyBehavior><a>View Memory</a></Link>
      </nav>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px', maxWidth: '400px', margin: 'auto' }}>
        <label htmlFor="name">Name</label><br/>
        <input type="text" name="name" id="name" required style={{ width: '100%', padding: '8px', marginBottom: '10px' }}/>

        <label htmlFor="email">Email</label><br/>
        <input type="email" name="_replyto" id="email" required style={{ width: '100%', padding: '8px', marginBottom: '10px' }}/>

        <label htmlFor="message">Message</label><br/>
        <textarea name="message" id="message" rows="4" required style={{ width: '100%', padding: '8px', marginBottom: '10px' }}></textarea>

        {/* Add your Gmail address as `_subject` to help track, optional */}
        <input type="hidden" name="_subject" value="New birthday message from website" />

        <button type="submit">Send</button>
      </form>

      {status && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
}
