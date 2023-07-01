import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("") 
const navigation = useNavigation()

  return (
    <KeyboardAwareScrollView>
    <View className="min-h-screen">
      <View className="flex-1 items-center justify-center">
      <View className="p-8 w-full max-w-sm">
        <Text className="text-3xl font-bold mb-6 text-slate-900 text-center">POS SYSTEM</Text>

        <Text className="text-lg mb-2">Username</Text>
        <TextInput
          className="w-full border border-violet-400 rounded-md h-12 px-4 mb-4"
          placeholder="Enter username"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
          
        <Text className="text-lg mb-2">Password</Text>
        <TextInput
          className="w-full border border-violet-400 rounded-md h-12 px-4"
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <View className="flex flex-row justify-between items-center my-8">
          <Pressable>
            <Text className="text-violet-400 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="h-12 bg-violet-400 rounded-md flex flex-row justify-center items-center px-6"
        >
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </KeyboardAwareScrollView>     
  )
}

export default Login
