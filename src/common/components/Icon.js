/**
 * @file icon
 */

import React from 'react';
import * as styled from './Icon.style';

/**
 * @param  {{name: String, width: String, height: String}} props
 */
function Icon(props) {
  return <styled.Icon {...props} />;
}

export default Icon;
