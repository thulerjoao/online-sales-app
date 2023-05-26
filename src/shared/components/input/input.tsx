import { TextInputProps } from 'react-native/types';

import { InputContainer } from './input.style';

type InputProps = TextInputProps;

const Input = ({ ...props }: InputProps) => {
  return <InputContainer {...props} />;
};

export default Input;
