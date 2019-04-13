import React from 'react';
import { Element } from './Image-styled';

interface IProps {
  alt?: string;
  src: string;
  className?: string;
}

const CommonImage: React.FunctionComponent<IProps> = ({
  alt = 'Image',
  src,
  ...rest
}): JSX.Element => {
  return <Element alt={alt} src={src} {...rest} />;
};

export default CommonImage;
