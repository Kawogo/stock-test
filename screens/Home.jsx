import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Entypo, MaterialIcons,MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        {/* <KeyboardAwareScrollView> */}
            <View className="bg-slate-100 h-screen p-4">
                <View className="mb-4 flex-row justify-between">
                    <View className="flex-row gap-2 items-center">
                    <Entypo name="shop" size={30} color="#50c878" />
                    <Text className="text-md font-bold">GLANNA COLLECTION</Text>
                    </View>
                    <TouchableOpacity className="h-10 px-5 m-2 rounded-md flex flex-row justify-center items-center border border-red-500"
                    onPress={()=> navigation.navigate('Login')}
                    >
                    <Text className="font-bold">Logout</Text>
                    </TouchableOpacity>
                </View>
            <View className="gap-1">
                <View className="flex-row justify-center grid-cols-2 gap-2">
                   <TouchableOpacity 
                   onPress={() => navigation.navigate('Categories')}
                   className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <AntDesign name="appstore-o" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Aina za bidhaa</Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                   onPress={() => navigation.navigate('Products')}
                   className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <AntDesign name="shoppingcart" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Bidhaa</Text>
                   </TouchableOpacity>
                </View>
                <View 
                className="flex-row justify-center grid-cols-2 gap-2">
                   <TouchableOpacity className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <Foundation name="dollar" size={40} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Mauzo</Text>
                   </TouchableOpacity>
                   <TouchableOpacity 
                   onPress={() => navigation.navigate('Pos')}
                   className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <MaterialCommunityIcons name="point-of-sale" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Duka</Text>
                   </TouchableOpacity>
                </View>
                <View className="flex-row justify-center grid-cols-2 gap-2">
                   <TouchableOpacity className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <AntDesign name="filetext1" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Ripoti</Text>
                   </TouchableOpacity>
                   <TouchableOpacity className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <AntDesign name="setting" size={30} color="#50c878" /> 
                    <Text className="text-lg font-bold text-slate-500">Settings</Text>
                   </TouchableOpacity>
                </View>
            </View>
            </View>
        {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
  )
}

export default Home