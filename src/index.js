import * as React from 'react'
import { StatusBar } from 'react-native'

import Route from './routes'

export default function App () {
  return (
    <>
      <StatusBar auto/>
      <Route />
    </>
  )
}
