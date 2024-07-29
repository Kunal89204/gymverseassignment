// src/App.js
import React, { useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';

function Aibot() {
  useEffect(() => {
    window.botpressWebChat.init({
      hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
      botId: 'ec423b6c-8765-493e-9757-20361c5290a1',
      messagingUrl: 'https://messaging.botpress.cloud',
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-gradient-to-r from-blue-50 to-blue-400">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to our Chatbot</h1>
        <p className="text-gray-600 text-xl">Start your conversation with a HI!</p>
      </header>
      <main>
        <button 
          className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => window.botpressWebChat.sendEvent({ type: 'show' })}
        >
          <FaRobot className="mr-2" /> Open Chat
        </button>
      </main>
    </div>
  );
}

export default Aibot;
