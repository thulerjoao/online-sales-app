import { fireEvent, render, screen } from '@testing-library/react-native';
import GlobalModal from '../globalModal';
import { globalModalTestId } from '../__mocks__/globalModal.testId';
import { ReactNode } from 'react';
import { View as MockView } from 'react-native';
import { modalTestId } from '../__mocks__/mosal.testId';

jest.mock('react-native-linear-gradient', () => {
  return ({ children }: { children: ReactNode }) => {
    return <MockView>{children}</MockView>;
  };
});

const mockModal = {
  title: 'mockTitle',
  text: 'mockTest',
  visible: true,
};

const mockCloseModal = jest.fn();

jest.mock('../../../../store/reduces/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => ({
    modal: mockModal,
    closeModal: mockCloseModal,
  }),
}));

describe('GlobalModal', () => {
  beforeEach(() => {
    render(<GlobalModal />);
  });

  it('should render with success', () => {
    const globalModal = screen.getByTestId(globalModalTestId.GLOBAL_MODAL_CONTAINER);

    expect(globalModal).toBeDefined();
  });

  it('should close modal', () => {
    const buttonClose = screen.getByTestId(modalTestId.MODAL_CLOSE_BUTTON);

    fireEvent.press(buttonClose)
    expect(mockCloseModal).toBeCalled()
  });

  it('should render text', () => {
    const text = screen.getByText(mockModal.text);
    
    expect(text).toBeDefined()
  });

  it('should render title', () => {
    const title = screen.getByText(mockModal.title);
    
    expect(title).toBeDefined()
  });
});

