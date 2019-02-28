import { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  return {
    email,
    message,
    name,
    setEmail,
    setMessage,
    setName,
  };
};
