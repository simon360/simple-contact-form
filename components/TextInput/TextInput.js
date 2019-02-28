/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const inputStyle = css`
  border: 1px solid #ccc;
  display: block;
  max-width: ${400 / 16}rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;

  :focus,
  :active,
  :hover {
    border: 1px solid #555;
  }

  :valid {
    border: 1px solid green;
  }

  :invalid {
    border: 1px solid red;
    box-shadow: none; /* Disable default Firefox styles */
  }
`;

const TextInput = props => <input css={inputStyle} {...props} />;

export default TextInput;
