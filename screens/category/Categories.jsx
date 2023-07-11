import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Button, FlatList, Alert } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import SafeViewAndroid from '../../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory, getAllCategories } from '../../slices/CategoriesSlice';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
import { ALERT_TYPE, Toast,Dialog, AlertNotificationRoot } from 'react-native-alert-notification';


// const SingleCategory = ({category_name, id , created_at, total_products}) => {
//   return (
//     <View className="mt-3 bg-white p-4 rounded-md shadow-xl w-full flex-row justify-between items-center" key={id}>
//     <View>
//        <Text className="text-lg font-semibold">{category_name}</Text>
//        <Text className="font-semibold text-blue-600">{total_products} Products</Text>
//        <Text className="text-sm mt-2 text-slate-600 italic">Imerekodiwa {created_at}</Text>
//     </View>
//     <View className="flex-row gap-2 justify-center items-center rounded-lg">
//     <Feather name="trash-2" size={24} color="red" />
//     <Feather name="edit" size={24} color="blue" />
//     </View>
//     </View>
// )
// }


const Categories = () => {

  const [category, setCategory] = useState('')

  const categories = useSelector(getAllCategories)

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = ['50%'];

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);


  const saveCategory = () => {


        dispatch(addCategory(
          {
          id: nanoid(4), 
          category_name: category, 
          created_at: moment().format('D-M-YYYY'),
          total_products: 60
          }
        ))

        setCategory('')

        // Dialog.show({
        //   type: ALERT_TYPE.SUCCESS,
        //   title: 'Imefanikiwa',
        //   textBody: 'Hongera! aina ya bidhaa imeongezwa',
        //   button: 'close',
        // })

        Alert.alert('Success','Category added successfully.')

  }


  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Delete category",
      "Are you sure you want to remove this category?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(deleteCategory(id))
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Imefanikiwa',
              textBody: 'Deleted successfully.',
              button: 'close',
            })
          },
        },
        {
          text: "No",
        },
      ]
    );
  };



  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <AlertNotificationRoot>
        <GestureHandlerRootView>

        <BottomSheetModalProvider>

        {/* <KeyboardAwareScrollView> */}

          
        {/* <AlertNotificationRoot> */}
   
            <View className="bg-slate-200 p-4 h-full">
            <View className="flex-row justify-between items-center">
                <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                className="flex-row items-center gap-1">
                    <AntDesign name="arrowleft" size={20} color="black" />
                    <Text className="text-lg font-bold">Aina za bidhaa</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                onPress={handlePresentModalPress}
                className="flex-row items-center gap-1">
                    <Feather name="plus-circle" size={20} color="black" />
                    <Text className="text-lg font-bold">Ongeza</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View className="mt-3">          

            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Tafuta kwa jina...."
            value={null}
            />
            </View>

            {/* {
                      <FlatList
                      data={categories}
                      renderItem={renderCategory}
                      keyExtractor={(item) => item.id}
                      />
            } */}

            {
              categories.map((category) => {
                return (
                  <View className="mt-3 bg-white p-4 rounded-md shadow-xl w-full flex-row justify-between items-center" key={category.id}>
                  <View>
                    <Text className="text-lg font-semibold">{category.category_name}</Text>
                    <Text className="font-semibold text-blue-600">{category.total_products} Products</Text>
                    <Text className="text-sm mt-2 text-slate-600 italic">Imerekodiwa {category.created_at}</Text>
                  </View>
                  <View className="flex-row gap-2 justify-center items-center rounded-lg">
                  <TouchableOpacity
                  onPress={() => showConfirmDialog(category.id)}
                  >
                  <Feather name="trash-2" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('EditCategory', {id: category.id})}
                  >
                  <Feather name="edit" size={24} color="blue" />
                  </TouchableOpacity>
                  </View>
                  </View>
              )
              })
            }
            </View>
   

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
            >
            <View className="p-4">
            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Jina la aina ya bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Weka jina"
            value={category}
            onChangeText={(value) => setCategory(value)}
            />
            </View>
           
            <TouchableOpacity
            onPress={saveCategory}
            className="h-12 bg-indigo-400 rounded-md flex flex-row justify-center items-center px-6 mt-4"
            >
           
            <Text className="text-white text-base font-medium">Ongeza</Text>
          
            </TouchableOpacity>
              </View>
            </BottomSheetModal>

        
        {/* </AlertNotificationRoot> */}

        {/* </KeyboardAwareScrollView> */}

        </BottomSheetModalProvider>
        </GestureHandlerRootView>
        </AlertNotificationRoot>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Categories


