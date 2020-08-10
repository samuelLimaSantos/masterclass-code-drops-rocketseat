import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);
  console.log(signed);
  // Pega a informação do signed
  async function handleSignIn() {
    // No mundo real se pegaria aqui os dados de usuário e senha
    console.log('Logar');
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignIn;
