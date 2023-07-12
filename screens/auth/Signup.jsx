import { View, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';




const Signup = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("") 
const navigation = useNavigation()



  return (
    <KeyboardAwareScrollView>
    <View className="min-h-screen">
      <View className="flex-1 items-center justify-center">
      <View className="p-8 w-full max-w-sm">
        <View className="justify-center items-center">
          {/* <Image source={require('../../assets/images/login.png')} className="w-56 h-56" /> */}
          <Text className="text-3xl font-bold text-slate-900 text-center mt-7">POS SYSTEM</Text>
          <Text className="text-xl font-bold mb-6 text-slate-900 text-center">Register</Text>
        </View>
        <View>
                <Text className="text-md mb-2 font-bold text-slate-500">Username</Text>
                <TextInput
                className="w-full border border-green-500 rounded-md h-12 px-4 mb-4"
                placeholder="Enter username"
                value={username}
                onChangeText={(value) => setUsername(value)}
                />
                <Text className="text-md mb-2 font-bold text-slate-500">Username</Text>
                <TextInput
                className="w-full border border-green-500 rounded-md h-12 px-4 mb-4"
                placeholder="Enter username"
                value={username}
                onChangeText={(value) => setUsername(value)}
                />
                <Text className="text-md mb-2 font-bold text-slate-500">Password</Text>
                <TextInput
                className="w-full border border-green-500 rounded-md h-12 px-4"
                placeholder="Enter password"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="h-12 bg-green-400 rounded-md flex flex-row justify-center items-center px-6 mt-5"
        >
          <View className="flex-1 flex items-center">
            <Text className="text-white text-base font-medium">Signup</Text>
          </View>
        </TouchableOpacity>
        <Text className="text-slate-500 text-center mt-3 mb-3 font-bold">Or</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="h-12 border border-green-400 rounded-md flex flex-row justify-center items-center px-6"
        >
          <View className="flex-1 flex items-center">
            <Text className="text-slate-500 text-base font-medium">Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </KeyboardAwareScrollView>     
  )
}

export default Signup
