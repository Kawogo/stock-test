import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';


const Login = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("") 
const navigation = useNavigation()

  return (
    <KeyboardAwareScrollView>
    <View className="min-h-screen">
      <View className="flex-1 items-center justify-center">
      <View className="p-8 w-full max-w-sm">
        <View className="justify-center items-center gap-2">
        <Entypo name="shop" size={50} color="#007fff" />
        <Text className="text-3xl font-bold mb-6 text-slate-900 text-center">POS SYSTEM</Text>
        </View>
        
        <View>
        <Text className="text-md mb-2 font-bold text-slate-500">Username</Text>
                <TextInput
                className="w-full border border-indigo-400 rounded-md h-12 px-4 mb-4"
                placeholder="Enter username"
                value={username}
                onChangeText={(value) => setUsername(value)}
                />
                
                <Text className="text-md mb-2 font-bold text-slate-500">Password</Text>
                <TextInput
                className="w-full border border-indigo-400 rounded-md h-12 px-4"
                placeholder="Enter password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                />
        </View>

        <View className="flex flex-row justify-between items-center my-8">
          <Pressable>
            <Text className="text-indigo-400 font-bold">Reset password</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="h-12 bg-indigo-400 rounded-md flex flex-row justify-center items-center px-6"
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
