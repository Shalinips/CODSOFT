import React, { useState, useRef, useEffect } from 'react';

const RuleBasedChatbot = () => {
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([
    {text: "Hello! I'm a simple rule-based chatbot. Ask me about the weather, time, or just say hi!", sender: 'bot'}
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    
    // Generate and add bot response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue.toLowerCase());
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);
    
    // Clear input
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const generateResponse = (userInput: string): string => {
    // Pattern matching for different types of queries
    if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
      return "Hello there! How can I help you today?";
    }
    
    if (userInput.includes('how are you')) {
      return "I'm just a simple bot, but I'm functioning well! How about you?";
    }
    
    if (userInput.includes('thank')) {
      return "You're welcome! Is there anything else I can help with?";
    }
    
    if (userInput.includes('bye') || userInput.includes('goodbye')) {
      return "Goodbye! Have a great day!";
    }
    
    if (userInput.includes('weather')) {
      return "I'm not connected to a weather service, but I can tell you it's a beautiful day for chatting!";
    }
    
    if (userInput.includes('time')) {
      return `The current time is ${new Date().toLocaleTimeString()}.`;
    }
    
    if (userInput.includes('date')) {
      return `Today is ${new Date().toLocaleDateString()}.`;
    }
    
    if (userInput.includes('name')) {
      return "I'm ChatBot, your friendly rule-based assistant!";
    }
    
    if (userInput.includes('help')) {
      return "I can respond to greetings, tell you the time or date, and have simple conversations. Try asking about the weather or just say hello!";
    }
    
    if (userInput.includes('joke')) {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call a fake noodle? An impasta!"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Default response for unrecognized inputs
    return "I'm not sure how to respond to that. Try asking about the time, weather, or just say hello!";
  };

  return (
    <div className="flex flex-col h-[500px] max-w-md mx-auto bg-background border border-border rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary text-primary-foreground p-4">
        <h2 className="text-lg font-semibold">Rule-Based Chatbot</h2>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-secondary text-secondary-foreground rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-background">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RuleBasedChatbot;