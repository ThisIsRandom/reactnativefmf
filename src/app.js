import { NavigationContainer } from '@react-navigation/native';
import Nav from './navigators';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from './providers/auth';
import { HttpProvider } from './providers/http';
import ThemeProvider from './providers/theme';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()

const queryClient = new QueryClient();

const App = () => {
    return (
        <AuthProvider>
            <HttpProvider>
                <QueryClientProvider
                    client={queryClient}
                >
                    <ThemeProvider>
                        <NavigationContainer>
                            <Nav />
                        </NavigationContainer>
                    </ThemeProvider>
                </QueryClientProvider>
            </HttpProvider>
        </AuthProvider>

    )
}

export default App;