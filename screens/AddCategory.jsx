import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast,Dialog, AlertNotificationRoot } from 'react-native-alert-notification';


const AddCategory = () => {
  const navigation = useNavigation()

  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <KeyboardAwareScrollView>
        <AlertNotificationRoot>
            <View className="bg-slate-100 p-4 h-screen">
          
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-3">
                <TouchableOpacity
                onPress={() => navigation.navigate('Categories')}
                >
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-lg font-bold">Ongeza aina ya bidhaa</Text>
                </View>
            </View>

            <View className="mt-3 bg-white p-3 rounded-md">
            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Jina la aina ya bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Tafuta kwa jina..."
            value={null}
            />
            </View>
           
            <TouchableOpacity
            // onPress={() => navigation.navigate('Categories')}
            onPress={() =>
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Imefanikiwa',
                    textBody: 'Hongera! aina ya bidhaa imeongezwa',
                    button: 'close',
                  })
            }
            className="h-12 bg-indigo-400 rounded-md flex flex-row justify-center items-center px-6 mt-4"
            >
           
            <Text className="text-white text-base font-medium">Ongeza</Text>
          
            </TouchableOpacity>
            </View> 
          
            </View>
        </AlertNotificationRoot>
        </KeyboardAwareScrollView>
        </SafeAreaView>
  )
}

export default AddCategory