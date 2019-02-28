/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const textareaStyle = css`
  border: 1px solid #ccc;
  display: block;
  max-width: ${600 / 16}rem;
  min-height: ${160 / 16}rem;
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

const TextArea = props => <textarea css={textareaStyle} {...props} />;

export default TextArea;
