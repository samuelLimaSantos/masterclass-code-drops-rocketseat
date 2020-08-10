import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/Routes/index';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* Todos os componentes aqui dentro tem acesso
        ao signed: true */}
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
