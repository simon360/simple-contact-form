import React from 'react';

const Index = () => (
  <React.Fragment>
    <h1>Contact SADL</h1>
    <p>Get in touch with Simon Andrews Development Limited</p>
    <form action="/" method="post">
      <div>
        <label>
          Your name
          <input type="text" name="contact_name" />
        </label>
      </div>
      <div>
        <label>
          Your email address
          <input type="email" name="contact_email" />
        </label>
      </div>
      <div>
        <label>
          Your message
          <textarea name="contact_message" />
        </label>
      </div>
      <div>
        <input type="submit" name="contact_submit" value="Submit" />
      </div>
    </form>
  </React.Fragment>
);

export default Index;
