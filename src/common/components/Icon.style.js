import styled, { css } from 'styled-components';

/**
 * @param  {string} name
 */
const requireImg = (name) => require(`../images/${name}.png`);

const Icon = styled.div`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;

  width: ${(props) => (props.width ? props.width : 0.48) + 'rem'};

  height: ${(props) => (props.height ? props.height : 0.48) + 'rem'};

  ${(props) =>
    props.name &&
    css`
      background-image: url(${requireImg(props.name)});
    `}

  ${(props) =>
    props.width && props.height
      ? css`
          background-size: ${props.width}rem ${props.height}rem;
        `
      : css`
          background-size: 0.48rem 0.48rem;
        `}
`;

export { Icon };
