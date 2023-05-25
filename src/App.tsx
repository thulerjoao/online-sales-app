import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';

//styled-compontens:
const TextNew = styled.Text`
  font-size: 24px;
  background-color: pink;
`;

//styled-sheets:
const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <TextNew>Texto teste</TextNew>
    </SafeAreaView>
  );
};

export default App;
