import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-w-screen min-h-screen p-8 bg-gray-900 text-white flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">Revolutionizing Communication with Sign Language Recognition</h1>

      {/* Section 1: Why Choose Us? */}
      <section className="max-w-4xl mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">💬 Breaking Barriers, Connecting Lives</h2>
        <p className="text-lg leading-relaxed">
          Imagine a world where communication has no limits. Our **Sign Language Recognition System** transforms sign language into **real-time text and speech**, making it easier than ever for the deaf and hearing communities to connect seamlessly.  
          Whether it's a casual conversation or an important meeting, our advanced technology ensures **everyone is heard and understood**.
        </p>
      </section>

      {/* Section 2: What Makes Us Different? */}
      <section className="max-w-4xl mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">🚀 Why You'll Love Our System</h2>
        <ul className="text-lg leading-relaxed space-y-6">
          <li>
            <span className="font-bold">✨ Instant Communication:</span> Experience the power of **real-time** sign language translation—no delays, just smooth conversations.
          </li>
          <li>
            <span className="font-bold">🎤 Speak with Confidence:</span> Our system converts gestures into **clear speech**, empowering you to communicate without barriers.
          </li>
          <li>
            <span className="font-bold">📱 Easy to Use:</span> With a **user-friendly** interface, anyone can use the system—no technical skills required.
          </li>
          <li>
            <span className="font-bold">🌐 Anytime, Anywhere:</span> Access the platform from any device, making communication possible **wherever you are**.
          </li>
          <li>
            <span className="font-bold">❤️ Built for Everyone:</span> Whether you're a deaf individual, a family member, or a business, our system fosters **inclusion** and **understanding**.
          </li>
        </ul>
      </section>

      {/* Section 3: Our Vision */}
      <section className="max-w-4xl mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">🌟 Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We believe that **communication is a human right**. Our mission is to create a world where no one is left out—where technology brings people closer together.  
          With our Sign Language Recognition System, we are **changing lives**, one conversation at a time.
        </p>
      </section>

      {/* Navigation Button */}
      <Link to="/">
        <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-800 rounded-lg text-lg font-semibold">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default About;
