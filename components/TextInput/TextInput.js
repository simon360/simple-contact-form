/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const inputStyle = css`
  display: block;
  max-width: ${400 / 16}rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;

  :valid {
    border: 1px solid rgba(0, 128, 0, 0.3);
  }

  :invalid {
    border: 1px solid rgba(255, 0, 0, 0.3);
    box-shadow: none; /* Disable default Firefox styles */
  }

  :hover:valid {
    border: 1px solid rgba(0, 128, 0, 0.5);
  }

  :hover:invalid {
    border: 1px solid rgba(255, 0, 0, 0.5);
  }

  :focus:valid,
  :active:valid {
    border: 1px solid green;
  }

  :focus:invalid,
  :active:invalid {
    border: 1px solid red;
  }
`;

const TextInput = props => <input css={inputStyle} {...props} />;

export default TextInput;
