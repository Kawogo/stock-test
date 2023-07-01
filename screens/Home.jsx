import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <KeyboardAwareScrollView>
            <View className="bg-slate-100 h-screen p-4">
                <View className="mb-8 flex-row justify-between">
                    <View className="flex-row gap-2 items-center">
                    <Entypo name="shop" size={30} color="#007fff" />
                    <Text>SHOP 1</Text>
                    </View>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Login')}
                className="flex-row gap-2 justify-center items-center"
                >
                        <Text className="text-red-600">Logout</Text>
                        <MaterialIcons name="logout" size={20} color="red" />
                </TouchableOpacity>
                </View>
                <View className="flex-row flex-wrap justify-center grid-cols-3 gap-2">
                   <View className="bg-white px-16 py-10 flex justify-center rounded-lg shadow-lg items-center">
                    <AntDesign name="appstore-o" size={30} color="#007fff" />
                    <Text className="text-lg font-normal">Items</Text>
                   </View>
                   <View className="bg-white px-16 py-10 flex justify-center rounded-lg shadow-lg items-center">
                    <AntDesign name="appstore-o" size={30} color="#007fff" />
                    <Text className="text-lg font-normal">Items</Text>
                   </View>
                   <View className="bg-white px-16 py-10 flex justify-center rounded-lg shadow-lg items-center">
                    <AntDesign name="appstore-o" size={30} color="#007fff" />
                    <Text className="text-lg font-normal">Items</Text>
                   </View>
                   <View className="bg-white px-16 py-10 flex justify-center rounded-lg shadow-lg items-center">
                    <AntDesign name="appstore-o" size={30} color="#007fff" />
                    <Text className="text-lg font-normal">Items</Text>
                   </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>
  )
}

export default Home