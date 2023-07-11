import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import SafeViewAndroid from '../../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast,Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import { getCategory, editCategory } from '../../slices/CategoriesSlice';
import { useDispatch, useSelector } from 'react-redux';


const EditCategory = ({route}) => {
  const [categoryName, setCategoryName] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {id} = route.params
  const category = useSelector((state) => getCategory(id, state))

  const updateCategory = () => {
    dispatch(editCategory({id: id, category_name: categoryName}))
    navigation.navigate('Categories')
  }


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
                <Text className="text-lg font-bold">Badilisha aina ya bidhaa</Text>
                </View>
            </View>

            <View className="mt-3 bg-white p-3 rounded-md">
            <Text className="font-bold text-lg mb-9 mt-5 text-center uppercase">{category.category_name}</Text>
            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Jina la aina ya bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Tafuta kwa jina..."
            defaultValue = {category.category_name}
            onChangeText={(val) => setCategoryName(val)}
            />
            </View>
           
            <TouchableOpacity
            onPress={() => updateCategory()}
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

export default EditCategory