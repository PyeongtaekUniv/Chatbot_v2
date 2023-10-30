"use client";

import Chatbot from "../components/Chatbot";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-6">
        <h1 className="text-2xl">Your Chatbot Name</h1>
      </header>

      {/* Introduction */}
      <section className="p-6">
        <h2 className="text-2xl font-bold">Welcome to [Your Chatbot Name]</h2>
        <p className="mt-4">
          A brief description of your chatbot, its capabilities, and its
          purpose.
        </p>
      </section>

      {/* Interactive Chatbot Section */}
      <section className="p-6 bg-blue-100">
        <h2 className="text-xl font-bold mb-4">Try It Out</h2>
        <Chatbot />
      </section>

      {/* Features/Highlights */}
      <section className="p-6">
        <h2 className="text-xl font-bold mb-4">Features</h2>
        <ul>
          <li>- Feature 1</li>
          <li>- Feature 2</li>
          <li>- Feature 3</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-6 mt-4">
        © 2023 Your Chatbot. All rights reserved.
      </footer>
    </div>
  );
};

export default Page;
