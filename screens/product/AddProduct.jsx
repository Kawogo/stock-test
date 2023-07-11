import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import SafeViewAndroid from '../../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE,Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import Checkbox from 'expo-checkbox';


const AddProduct = () => {
  const navigation = useNavigation()
  const [isChecked, setChecked] = useState(false);


  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <KeyboardAwareScrollView>
        <AlertNotificationRoot>
            <View className="bg-slate-100 p-4 h-screen">
          
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-3">
                <TouchableOpacity
                onPress={() => navigation.navigate('Products')}
                >
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
                <Text className="text-lg font-bold">Ongeza bidhaa</Text>
                </View>
            </View>

            <View className="mt-3 bg-white p-3 rounded-md">
              
              <View className="flex gap-4">
              <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Jina la bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Weka jina la bidhaa..."
            value={null}
            />
            </View>

            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Idadi</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Ingiza idadi ya bidhaa..."
            value={null}
            />
            </View>

            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Aina ya bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Chagua aina ya bidhaa..."
            value={null}
            />
            </View>

            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Bei ya kununulia</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Ingiza bei ya kununulia..."
            value={null}
            />
            </View>

            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Bei ya kuuzia</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Ingiza bei ya kuuzia..."
            value={null}
            />
            </View>



            <View className="flex-row">
            <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? 'blue' : undefined}
                />
            <Text className="text-md font-bold text-slate-500 ml-2">Active</Text>
            </View>
           
                



            <TouchableOpacity
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
          
            </View>
            </AlertNotificationRoot>
        </KeyboardAwareScrollView>
        </SafeAreaView>
  )
}

export default AddProduct