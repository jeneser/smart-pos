import React from 'react';
import * as styled from './Icon.style';

/**
 * icon
 * @param  {{name: String, width: String, height: String}} props
 */
function Icon(props) {
  return <styled.Icon {...props} />;
}

export default Icon;
