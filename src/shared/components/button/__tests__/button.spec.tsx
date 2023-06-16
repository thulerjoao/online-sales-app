import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from '../button';
import { View as MockView } from 'react-native';
import { ReactNode } from 'react';
import { buttonConst } from '../__mocks__/buttonEnum';

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: {children: ReactNode}) => {
    return <MockView>{children}</MockView>;
  };
});

const mockOnPress = jest.fn()

describe('Button', () => {
  beforeEach(() => {
    render(<Button title="test" testID={buttonConst.BUTTON_TEST_ID} onPress={mockOnPress}/>);
  });
  
  it('Should render button success', () => {
    const button = screen.getByTestId(buttonConst.BUTTON_TEST_ID);
    expect(button).toBeDefined();
  });

  it('Should call onPress', () => {
    const button = screen.getByTestId(buttonConst.BUTTON_TEST_ID);
    fireEvent.press(button)

    expect(mockOnPress).toBeCalled();
  });

  it('Should hide loading', ()=>{
    const loading = screen.queryAllByTestId(buttonConst.BUTTON_LOADING)

    expect(loading.length).toEqual(0)
  })

  it('Should render loading', ()=>{
    render(<Button title="test" testID={buttonConst.BUTTON_TEST_ID} loading/>);

    const loading = screen.queryAllByTestId(buttonConst.BUTTON_LOADING)

    expect(loading.length).toEqual(1)
  })
});
