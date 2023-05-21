import React from 'react';
import MessageDisplay from './MessageDisplay';

interface UserMessage {
  role: string;
  content: string;
}

interface MessagesDisplayProps {
  userMessages: UserMessage[];
}

const MessagesDisplay: React.FC<MessagesDisplayProps> = ({ userMessages }) => {
  return (
    <div className='messages-display'>
      {userMessages.map((userMessage, index) => (
        <MessageDisplay key={index} message={userMessage} />
      ))}
    </div>
  );
};

export default MessagesDisplay;
