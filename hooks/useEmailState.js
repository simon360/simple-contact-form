import { useState } from 'react';
import config from '../config';

const send = async ({ email, message, name, setStatus }) => {
  try {
    setStatus('loading');

    const response = await fetch(`${config.api}/contact`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({
        email,
        message,
        name,
      }),
    });

    if (response.ok) {
      setStatus('sent');
    } else {
      setStatus('failed');
    }
  } catch (e) {
    console.error(e);
    setStatus('failed');
  }
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
