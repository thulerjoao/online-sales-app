import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native/types';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  marginCustom?: string;
}

const Text = ({ color, type, marginCustom, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLDE:
      case textTypes.TITLE_SEMI_BOLDE:
      case textTypes.TITLE_lIGHT:
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUB_TITLE_BOLDE:
      case textTypes.SUB_TITLE_SEMI_BOLDE:
      case textTypes.SUB_TITLE_lIGHT:
      case textTypes.SUB_TITLE_REGULAR:
        return '20px';
      case textTypes.BUTTON_BOLDE:
      case textTypes.BUTTON_SEMI_BOLDE:
      case textTypes.BUTTON_lIGHT:
      case textTypes.BUTTON_REGULAR:
        return '18px';
      case textTypes.PARAGRAPH_SMALL_BOLDE:
      case textTypes.PARAGRAPH_SMALL_SEMI_BOLDE:
      case textTypes.PARAGRAPH_SMALL_lIGHT:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case textTypes.PARAGRAPH_BOLDE:
      case textTypes.PARAGRAPH_SEMI_BOLDE:
      case textTypes.PARAGRAPH_lIGHT:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLDE:
      case textTypes.SUB_TITLE_BOLDE:
      case textTypes.PARAGRAPH_SMALL_BOLDE:
      case textTypes.PARAGRAPH_BOLDE:
      case textTypes.BUTTON_BOLDE:
        return 'Poppins-Bold';
      case textTypes.TITLE_SEMI_BOLDE:
      case textTypes.SUB_TITLE_SEMI_BOLDE:
      case textTypes.PARAGRAPH_SMALL_SEMI_BOLDE:
      case textTypes.PARAGRAPH_SEMI_BOLDE:
      case textTypes.BUTTON_SEMI_BOLDE:
        return 'Poppins-SemiBold';
      case textTypes.TITLE_lIGHT:
      case textTypes.PARAGRAPH_SMALL_lIGHT:
      case textTypes.PARAGRAPH_lIGHT:
      case textTypes.SUB_TITLE_lIGHT:
      case textTypes.BUTTON_lIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_REGULAR:
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.BUTTON_REGULAR:
        return 'Poppins-Regular';

      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return <TextContainer marginCustom={marginCustom} fontFamily={fontFamily} fontSize={fontSize} color={color} {...props} />;
};

export default Text;
