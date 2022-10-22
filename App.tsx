import React from 'react'
import { theme } from './src/theme'

import {
  NativeBaseProvider
} from 'native-base'

import { Login } from './src/screens/Login'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Login />
    </NativeBaseProvider>
  )
}

