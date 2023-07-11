import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign,Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Pos = () => {
  const navigation = useNavigation()

  const shoppingCart = [
    {
      id: 1,
      name: "Item 1",
      price: 10.99,
      quantity: 2
    },
    {
      id: 2,
      name: "Item 2",
      price: 5.99,
      quantity: 1
    },
    {
      id: 3,
      name: "Item 3",
      price: 7.5,
      quantity: 3
    },
    {
      id: 4,
      name: "Item 4",
      price: 3.49,
      quantity: 4
    },
    {
      id: 5,
      name: "Item 5",
      price: 2.99,
      quantity: 2
    }
  ];





  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <KeyboardAwareScrollView>
            <View className="bg-slate-100 p-4">
                <View className="mb-4 flex-row justify-between">
                <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                className="flex-row items-center gap-1">
                    <AntDesign name="arrowleft" size={20} color="black" />
                    <Text className="text-lg font-bold">Duka</Text>
                </TouchableOpacity>
                </View>
                </View>

                
            <View className="mt-3 flex-row gap-2 items-center justify-center">
            <TextInput
            className="w-10/12 border border-indigo-400 rounded-md h-12 px-4"
            placeholder="Tafuta bidhaa ya kuuza..."
            value={null}
            />
            <TouchableOpacity
            className="bg-indigo-400 max-w-fit rounded-md p-3"
            >
            <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
            </View>

            <View className="mt-5">
            <Text className="text-lg font-bold text-slate-500">Oda #4457</Text>
            <View className="border border-t-0 border-indigo-400 mt-3 mb-3"></View>

            {
                shoppingCart.map((item) => {
                    return (
                        <View className="mt-3 bg-white p-4 rounded-md shadow-xl w-full flex-row justify-between items-center" key={item.id}>
                        <View>
                        <Text className="text-lg font-semibold">{item.name}</Text>
                        <Text className="font-semibold text-blue-500">{item.price}/=</Text>
                        </View>
                        <View className="flex-row gap-3 justify-center items-center">
                        <View className="bg-slate-300 rounded-full p-1">
                        <AntDesign name="minus" size={24} color="black" />
                        </View>
                        <View>
                        <Text className="font-bold">{item.quantity}</Text>
                        </View>
                        <View className="bg-slate-300 rounded-full p-1">
                        <AntDesign name="plus" size={24} color="black" />
                        </View>
                        </View>
                        <View className="flex-row gap-2 justify-center items-center rounded-lg">
                        <Entypo name="cross" size={24} color="red" />
                        </View>
                        </View>
                    )
                })
            }


            <View className="bg-slate-400 p-2 w-full rounded-md sticky bottom-0 mt-5">
            <Text className="text-md font-bold text-white mb-3">Punguzo: 10,000/=</Text>
            <Text className="text-md font-bold text-white mb-3">Kodi (18%): 5,000/=</Text>
            <Text className="text-md font-bold text-white">Jumla: 69,000/=</Text>
            </View>


            </View>



            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="h-12 bg-indigo-400 rounded-md flex flex-row justify-center items-center px-6 mt-5"
            >
            <View className="flex-1 flex items-center">
                <Text className="text-white text-base font-medium">Maliza Oda</Text>
            </View>
            </TouchableOpacity>

            



            </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>
  )
}

export default Pos