Install Node.js

Download and install from: https://nodejs.org

Verify installation in terminal/command prompt:

node -v
npm -v


Create a new React project (only once at the start)
In the terminal, run:
npx create-react-app chatbot-app --template typescript


This will generate a React + TypeScript project inside a folder called chatbot-app.

Go into the project folder

cd chatbot-app


Replace/Add files in src/ folder

Create a new file: RuleBasedChatbot.tsx → paste the chatbot component code I gave you.
now your App.tsx will look the same as mine


export default App;


Start the development server

npm start


This will open the project in your browser at http://localhost:3000
.

The page will automatically reload whenever you save changes in your code.

Using the chatbot

Type a message in the input box (e.g., “hi” or “time”).

The bot will reply with a rule-based response.

Try greetings, asking for time/date, or typing “joke”.

Stop the server (when done)

Go back to the terminal and press CTRL + C.
