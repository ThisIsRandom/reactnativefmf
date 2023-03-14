import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function ThemeProvider({children}) {
  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          backgroundColor: "fmf.secondary"
        }
      },
      Text: {
        baseStyle: {
          color: "white"
        }
      }
    },
    colors: {
      // Add new color
      fmf: {
        primary: '#595048',
        secondary: '#C19A6B'
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      {
        children
      }
    </NativeBaseProvider>
  );
}