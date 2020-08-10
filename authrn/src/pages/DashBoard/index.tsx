import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const DashBoard: React.FC = () => {
  const { signed, user, signOut } = useContext(AuthContext);
  console.log(signed);
  // Pega a informação do signed
  async function handleSignOut() {
    // No mundo real se pegaria aqui os dados de usuário e senha
    console.log('Logar');
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DashBoard;
