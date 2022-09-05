import { StyleSheet, Text, View } from 'react-native';
import SignInForm from './src/components/sign-in/SignInForm';

export default function App() {
  return (

    <SignInForm/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
