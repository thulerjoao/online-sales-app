import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({ color, type, ...props }: TextProps) => {
  const handlefontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);

  return <TextContainer fontSize={handlefontSize} color={color} {...props} />;
};

export default Text;