"use client";
import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");

    // Send this input to the API to get a response.
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await response.json();
    setMessages([
      ...messages,
      { text: input, type: "user" },
      { text: data.output, type: "bot" },
    ]);
  };

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded shadow">
        {/* Messages Display */}
        <div className="h-64 overflow-y-auto mb-4">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`mb-2 ${
                message.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`py-1 px-3 rounded ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 rounded-l px-4 py-2 border"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
