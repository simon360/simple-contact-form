/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';
import useEmailState from '../hooks/useEmailState';

const wrapperStyle = css`
  * {
    box-sizing: border-box;
  }

  font-family: 'Helvetica Neue', Arial, sans-serif;
  margin: 0 auto;
  max-width: ${800 / 16}rem;
  padding: 1rem;
  position: relative;
`;

const Index = () => {
  const {
    email,
    message,
    name,
    status,

    setEmail,
    setMessage,
    setName,
    submitMessage,
  } = useEmailState();

  return (
    <div css={wrapperStyle}>
      <h1>Contact SADL</h1>
      <p>Get in touch with Simon Andrews Development Limited</p>
      <form
        action="/"
        method="post"
        onSubmit={e => {
          submitMessage();

          e.preventDefault();
          return false;
        }}
      >
        <div>
          <label>
            Your name
            <TextInput
              type="text"
              onChange={e => setName(e.target.value)}
              required
              value={name}
            />
          </label>
        </div>
        <div>
          <label>
            Your email address
            <TextInput
              type="email"
              name="contact_email"
              onChange={e => setEmail(e.target.value)}
              required
              value={email}
            />
          </label>
        </div>
        <div>
          <label>
            Your message
            <TextArea
              name="contact_message"
              onChange={e => setMessage(e.target.value)}
              required
              value={message}
            />
          </label>
        </div>
        <div>
          <input
            type="submit"
            disabled={status === 'loading'}
            name="contact_submit"
            value={
              {
                failed: '🚫',
                loading: '⏱',
                normal: 'Submit',
                sent: 'Sent!',
              }[status]
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Index;
