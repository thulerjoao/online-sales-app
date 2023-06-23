import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from '../button';
import { View as MockView } from 'react-native';
import { ReactNode } from 'react';
import { buttonConst } from '../__mocks__/buttonEnum';
import { theme } from '../../../themes/theme';

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

const mockOnPress = jest.fn();

const mockTitle = 'mockTitle'

describe('Button', () => {
  beforeEach(() => {
    render(<Button title={mockTitle} onPress={mockOnPress} />);
  });

  it('Should render button success', () => {
    const button = screen.getByTestId(buttonConst.BUTTON_DEFAULT);
    expect(button).toBeDefined();
  });

  it('Should render title', () => {
    const title = screen.getByTestId(buttonConst.BUTTON_TITLE)

    expect(title).toBeDefined()

  });

  it('Should render title by text', () => {
    const title = screen.getByText(mockTitle)

    expect(title).toBeDefined()

  });

  it('Should call onPress', () => {
    const button = screen.getByTestId(buttonConst.BUTTON_DEFAULT);
    fireEvent.press(button);

    expect(mockOnPress).toBeCalled();
  });

  it('Should hide loading', () => {
    const loading = screen.queryAllByTestId(buttonConst.BUTTON_LOADING);

    expect(loading.length).toEqual(0);
  });

  it('Should render loading', () => {
    render(<Button type={theme.buttons.buttonsTheme.primary} title="test" loading />);

    const loading = screen.queryAllByTestId(buttonConst.BUTTON_LOADING);

    expect(loading.length).toEqual(1);
  });

  it('Should render secondary button', () => {
    render(<Button title="test" type={theme.buttons.buttonsTheme.secondary} />);

    const button = screen.getByTestId(buttonConst.BUTTON_SECONDARY);
    expect(button).toBeDefined();

  });

  it('Should render disable button', () => {
    render(<Button title="test" disable />);

    const button = screen.getByTestId(buttonConst.BUTTON_DISABLE);
    expect(button).toBeDefined();

  });

});
