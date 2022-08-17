import { ChakraProvider } from '@chakra-ui/react';
import {AuthProvider} from './hooks/AuthContext'
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  return (
    <ChakraProvider>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
