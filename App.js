import { ChatEngine } from 'react-chat-engine';
import { MessageBubble } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import LogOut from './components/LogOut';
import './App.css';


const projectID = 'fdbaf09c-70f0-43f1-8262-c82806655e2d';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderNewMessageForm={(creds, chatId) => {}}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

      
    />

  );
    
};

// infinite scroll, logout, more customizations...

export default App;