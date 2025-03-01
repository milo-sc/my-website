export default function About() {
  return (
    <main>
      <h1>About Us</h1>
      <p>
        Learn more about our company and mission.
      </p>
      
      {/* Example Navigation Link */}
      <a 
        href="/" 
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        ← Back to Home
      </a>
    </main>
  );
}