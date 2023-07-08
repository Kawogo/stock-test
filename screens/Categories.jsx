import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import React, { useCallback, useRef } from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


const Categories = () => {
  const navigation = useNavigation()

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = ['50%'];

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    // console.log('handleSheetChanges', index);
  }, []);


  const categoryList = [
    {id: 1, category_name: 'Nguo za kike', created_at: '02-12-2022', total_products: 320},
    {id: 2, category_name: 'Viatu', created_at: '02-12-2022', total_products: 500},
    {id: 3, category_name: 'Jeans', created_at: '02-12-2022', total_products: 45},
    {id: 4, category_name: 'Masweta', created_at: '02-12-2022', total_products: 78},
    {id: 5, category_name: 'Mashuka', created_at: '02-12-2022', total_products: 29},
    {id: 6, category_name: 'Mashuka', created_at: '02-12-2022', total_products: 29},
    {id: 7, category_name: 'Mashuka', created_at: '02-12-2022', total_products: 29},
    {id: 8, category_name: 'Mashuka', created_at: '02-12-2022', total_products: 29},
  ]


  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        
        <GestureHandlerRootView>

        <BottomSheetModalProvider>

        <KeyboardAwareScrollView>
            <View className="bg-slate-100 p-4">
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
               {
               categoryList.map((category) => {
                return (
                    <View className="mt-3 bg-white p-4 rounded-md shadow-xl w-full flex-row justify-between items-center" key={category.id}>
                    <View>
                       <Text className="text-lg font-semibold">{category.category_name}</Text>
                       <Text className="font-semibold text-blue-600">{category.total_products} Products</Text>
                       <Text className="text-sm mt-2 text-slate-600 italic">Imerekodiwa {category.created_at}</Text>
                    </View>
                    <View className="flex-row gap-2 justify-center items-center rounded-lg">
                    <Feather name="trash-2" size={24} color="red" />
                    <Feather name="edit" size={24} color="blue" />
                    </View>
                    </View>
                )
               })}  
            </View>
   

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
            <View className="p-4">
            <View>
            <Text className="text-md font-bold text-slate-500 mb-2">Jina la aina ya bidhaa</Text>
            <TextInput
            className="w-full border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Tafuta kwa jina..."
            value={null}
            />
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
            </BottomSheetModal>

        </KeyboardAwareScrollView>

        </BottomSheetModalProvider>
        </GestureHandlerRootView>

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