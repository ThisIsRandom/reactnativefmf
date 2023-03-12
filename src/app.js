import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, View, Text } from 'native-base'
import Nav from './navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from './providers/auth';
import { HttpProvider } from './providers/http';

const queryClient = new QueryClient();

const App = () => {
    return (
        <AuthProvider>
            <HttpProvider>
                <QueryClientProvider
                    client={queryClient}
                >
                    <NativeBaseProvider>
                        <NavigationContainer>
                            <Nav />
                        </NavigationContainer>
                    </NativeBaseProvider>
                </QueryClientProvider>
            </HttpProvider>
        </AuthProvider>

    )
}

export default App;