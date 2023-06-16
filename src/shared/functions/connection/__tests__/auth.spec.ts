import { MethodEnum } from '../../../enums/methods.enum';
import { RoutersUrl } from '../../../enums/routers.enum';
import { getItemStorage, removeItemStorage, setItemStorage } from '../../storageProxy';
import { getAuthorizatedToken, logout, setAuthorizatedToken, unsetAuthorizatedToken } from '../auth';

const mockReturn = 'uidsha546dasuio45';

jest.mock('../../storageProxy');

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(mockReturn)),
  removeItem: jest.fn(() => Promise.resolve()),
}));

describe('Auth', () => {
  it('Should call removeItem in unsetAuthorizatedToken', () => {
    unsetAuthorizatedToken();

    expect(removeItemStorage).toHaveBeenCalledWith('AUTORIZATION_KEY');
  });

  it('Should get an item with getAuthorizatedToken', () => {
    getAuthorizatedToken();

    expect(getItemStorage).toHaveBeenCalledWith('AUTORIZATION_KEY');
  });
  it('Should set item in setAuthorizatedToken', () => {
    setAuthorizatedToken(mockReturn);

    expect(setItemStorage).toHaveBeenCalledWith('AUTORIZATION_KEY', mockReturn);
  });


  it('Should call logout', () => {
    const navigate: any = {
        reset: jest.fn()
    }

    logout(navigate)
    expect(removeItemStorage).toHaveBeenCalledWith('AUTORIZATION_KEY');
    expect(navigate.reset).toHaveBeenCalledWith({
        index: 0,
        routes: [{name: RoutersUrl.LOGIN}]
    });
  });
});
