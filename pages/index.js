import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dogon Community Garden</title>
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Dogon Community Empowerment Project</h1>
        <p>We teach gardening, technology, and business skills to build strong futures.</p>

        <section>
          <h2>Donate to Empower Growth</h2>
          <p>Your donations help fund gardens, tech education, and youth mentorship.</p>
          <form action="https://www.paypal.com/donate" method="post" target="_blank">
            <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID" />
            <button type="submit">Donate via PayPal</button>
          </form>
        </section>

        <section>
          <h2>Get Involved</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="I'd like to volunteer..." required></textarea>
            <button type="submit">Join Us</button>
          </form>
        </section>

        <footer>
          <p>IRS Acknowledgment letters available upon request for donations.</p>
        </footer>
      </main>
    </div>
  );
}

