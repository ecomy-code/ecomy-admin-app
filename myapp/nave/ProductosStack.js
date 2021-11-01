import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../foodapp/Home'

import Restaurant from '../foodapp/Restaurant'



const Stack = createStackNavigator()

export default function ProductosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homep"
        component={Home}
        options={{
          title: "MundiCom: La cuesta, Corredores",
          headerStyle: {
            backgroundColor: '#178a60',
          },
          headerTintColor: '#fff',
        }}


      />
      <Stack.Screen
        name="Restaurantp"
        component={Restaurant}
        options={{
          title: "Agregar producto",
          headerStyle: {
            backgroundColor: '#178a60',
          },
          headerTintColor: '#fff',
        }}
      />





    </Stack.Navigator>
  )
}
