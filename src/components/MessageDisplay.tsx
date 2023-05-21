import React from 'react';

interface MessageDisplayProps {
  message: {
    role: string;
    content: string;
  };
}

const MessageDisplay: React.FC<MessageDisplayProps> = ({ message }) => {
  return (
    <div className='message-display'>
      <p id='icon'>X</p>
      <p>{message.role}</p>
      <p>{message.content}</p>
    </div>
  );
};

export default MessageDisplay
