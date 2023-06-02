import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Login from './modules/login/pages/Login';
import GlobalModal from './shared/components/modal/globalModal';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal />
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
