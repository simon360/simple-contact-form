/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

const labelStyle = css``;

const labelTextStyle = css`
  display: block;
  margin-bottom: 0.25rem;
`;

const Label = ({ children, text }) => (
  <label css={labelStyle}>
    <span css={labelTextStyle}>{text}</span>
    {children}
  </label>
);

Label.propTypes = {
  /**
   * Children to show
   */
  children: PropTypes.node,

  /**
   * The text of the label. Appears above an input.
   */
  text: PropTypes.node.isRequired,
};

export default Label;
