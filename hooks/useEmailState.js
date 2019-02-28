import { useState } from 'react';

const send = async ({ setStatus }) => {
  return new Promise(resolve => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      resolve();
    }, 2000);
  });
};

export default () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('normal');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const output = {
    email,
    message,
    name,
    status,

    setEmail,
    setMessage,
    setName,
    setStatus,
  };

  const submitMessage = () => {
    return send(output);
  };

  return {
    ...output,
    submitMessage,
  };
};
