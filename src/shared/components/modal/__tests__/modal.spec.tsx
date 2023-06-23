import { fireEvent, render, screen } from '@testing-library/react-native';
import Modal from '../modal';
import { View as MockView } from 'react-native';
import { modalTestId } from '../__mocks__/mosal.testId';
import React, { ReactNode } from 'react';

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

const mockTitle = 'mockTitle';
const mockText = 'mockText';
const mockOnClose = jest.fn();

describe('Modal', () => {
  beforeEach(() => {
    render(
      <Modal
        testID={modalTestId.MODAL_CONTAINER}
        title={mockTitle}
        text={mockText}
        onCloseModal={mockOnClose}
      />,
    );
  });

  it('should render with success', () => {
    const modal = screen.getByTestId(modalTestId.MODAL_CONTAINER);

    expect(modal).toBeDefined();
  });

  it('should render title', () => {
    const title = screen.getByText(mockTitle);

    expect(title).toBeDefined();
  });

  it('should render text', () => {
    const text = screen.getByText(mockText);

    expect(text).toBeDefined();
  });

  it('should render and call function on press', () => {
    const button = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);
    expect(button).toBeDefined();

    fireEvent.press(button);
    expect(mockOnClose).toBeCalled();
  });

  it('should render icon and call function on press', () => {
    const icon = screen.getByTestId(modalTestId.MODAL_CLOSE_ICON);
    expect(icon).toBeDefined();

    fireEvent.press(icon);
    expect(mockOnClose).toBeCalled();
  });
});
