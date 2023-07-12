import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, SafeAreaView, TouchableOpacity, Switch } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Entypo, Feather,MaterialCommunityIcons, Foundation, EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
  } from '@gorhom/bottom-sheet';

const Home = () => {
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation()
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = ['55%'];

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        {/* <KeyboardAwareScrollView> */}
        <GestureHandlerRootView>

       <BottomSheetModalProvider>
            <View className="bg-slate-100 h-screen p-4">
            <View className="mb-4 flex-row justify-between">
                <View className="flex-row gap-2 items-center">
                <Entypo name="shop" size={30} color="#50c878" />
                <Text className="text-lg font-bold text-slate-500">GLANNA COLLECTION</Text>
                </View>
                {/* <TouchableOpacity className="h-10 px-5 m-2 rounded-md flex flex-row justify-center items-center border border-green-500"
                onPress={handlePresentModalPress}
                >
                <Text className="font-bold text-red-400">Logout</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={handlePresentModalPress} className="flex-row items-center">
                    <EvilIcons name="user" size={40} color="#50c878" />
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
                    <FontAwesome5 name="users" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Wafanyakazi</Text>
                   </TouchableOpacity>
                </View>
                <View className="flex-row justify-center grid-cols-2 gap-2">
                   <TouchableOpacity className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <FontAwesome5 name="users" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Vendors</Text>
                   </TouchableOpacity>
                   <TouchableOpacity className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-32">
                    <AntDesign name="filetext1" size={30} color="#50c878" />
                    <Text className="text-lg font-bold text-slate-500">Manunuzi</Text>
                   </TouchableOpacity>
                </View>
            </View>

            {/* Bottomsheetmodal */}
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
            >
            <View className="p-4">
            <View className="flex-col space-y-3">
                <View className="flex-col items-center gap-2">
                {/* <Text className="font-bold text-xl text-slate-400">My Profile</Text> */}
                <EvilIcons name="user" size={60} color="#50c878" />
                 <View className="flex-col items-center">
                    <Text className="font-bold text-xl">David Kawogo</Text>
                    <Text className="font-bold text-slate-400">Sales Manager</Text>
                 </View>
                </View>
            {/* <View className="border border-t-0 border-slate-400 mt-3 mb-3"></View> */}
            <View>
                <View className="flex-row gap-3 mt-2">
                <AntDesign name="message1" size={24} color="black" />
                <Text className="text-base font-medium">Notifications</Text> 
                <View className="bg-red-500 w-8 rounded-full items-center justify-center"><Text className="text-white font-bold">4</Text></View>
                </View>

                <View className="flex-row gap-3 mt-2 items-center">
                <Feather name="moon" size={24} color="black" />
                <Text className="text-base font-medium">Theme mode</Text> 
                <Switch
                    trackColor={{false: '#767577', true: '#50c878'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                </View>

                <View className="flex-row gap-3 mt-2">
                <AntDesign name="setting" size={24} color="black" /> 
                <Text className="text-base font-medium">Settings</Text> 
                </View>
            </View>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            className="h-12 border border-red-500 rounded-md flex flex-row justify-center items-center px-6 mt-4"
            >
           
            <Text className="text-base font-medium">Logout</Text>
          
            </TouchableOpacity>
            </View>
            </BottomSheetModal>
            </View>
        {/* </KeyboardAwareScrollView> */}
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
        </SafeAreaView>
  )
}

export default Home