import React from 'react';

const ChatbotUI = () => {
  return (
    <div className="w-full max-w-md mx-auto h-[600px] rounded-[33px] shadow-lg bg-blue overflow-hidden flex flex-col">
      {/* Chatbot Header */}
      <div className="bg-blue-600 text-white p-4 text-center">
        <h2 className="text-xl font-inter">BestBuy AI Sales Advisor</h2>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-100">
        {/* Bot Message */}        
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 max-w-[80%] shadow">
            <p className="text-sm text-black font-inter">Hello, Adam</p>
          </div>
        </div>

        {/* User Message */}
        
        <div className="flex items-end justify-end">
          <div className="bg-white text-black rounded-lg p-2 max-w-[80%] shadow">
            <p className="text-sm font-inter">I need a list of 50 inch TVs under $500</p>
          </div>
        </div>

        {/* Bot Response */}
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-3 max-w-[80%] shadow">
            <p className="text-sm text-black font-inter">Here are some options:</p>
            <ul className="list-disc pl-5 text-sm mt-2 space-y-1 text-black font-inter">
              <li>Toshiba 50-inch Class C350 Series LED 4K UHD Smart Fire TV</li>
              <li>Insignia 50-inch Class F30 Series LED 4K UHD Smart Fire TV</li>
              <li>Hisense 50-inch Class A6 Series LED 4K UHD Smart Google TV</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chat Input Area */}
      <div className="bg-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-l-lg p-3 outline-none text-black font-inter"
          />
          <button className="bg-yellow-400 text-white px-4 py-3 rounded-r-lg font-inter">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotUI;