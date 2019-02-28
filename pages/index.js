import React from 'react';
import useEmailState from '../hooks/useEmailState';

const Index = () => {
  const {
    email,
    message,
    name,
    setEmail,
    setMessage,
    setName,
  } = useEmailState();

  return (
    <React.Fragment>
      <h1>Contact SADL</h1>
      <p>Get in touch with Simon Andrews Development Limited</p>
      <form action="/" method="post">
        <div>
          <label>
            Your name
            <input
              type="text"
              name="contact_name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>
        <div>
          <label>
            Your email address
            <input
              type="email"
              name="contact_email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div>
          <label>
            Your message
            <textarea
              name="contact_message"
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </label>
        </div>
        <div>
          <input type="submit" name="contact_submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Index;
