import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../../components/SafeViewAndroid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CategoryItem from '../../components/CategoryItem';

const Products = () => {
  const navigation = useNavigation()

  const productList = [
    {
        id: 1,
        name: 'Iphone 13 ProMax',
        quantity: 40,
        purchase_price: 3000000,
        sale_price: 4000000,
        category: 'Phone',
        active: 1,
        created_at: '02-12-2022'
    },
    {
        id: 2,
        name: 'Dell Inspiron',
        quantity: 32,
        purchase_price: 3500000,
        sale_price: 5000000,
        category: 'Laptop',
        active: 1,
        created_at: '02-12-2022'
    },
    {
        id: 3,
        name: 'HP Spectre',
        quantity: 4,
        purchase_price: 2500000,
        sale_price: 4000000,
        category: 'Laptop',
        active: 1,
        created_at: '02-12-2022'
    },
    {
        id: 4,
        name: 'Hp All in One',
        quantity: 7,
        purchase_price: 5000000,
        sale_price: 7000000,
        category: 'Desktop',
        active: 1,
        created_at: '02-12-2022'
    },
    {
        id: 5,
        name: 'Samsung S23 Ultra',
        quantity: 57,
        purchase_price: 4500000,
        sale_price: 7000000,
        category: 'Phone',
        active: 1,
        created_at: '02-12-2022'
    },
  ]

  return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <KeyboardAwareScrollView>
            <View className="bg-slate-100 p-4">
            <View className="flex-row justify-between items-center">
                <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}

                className="flex-row items-center gap-1">
                    <AntDesign name="arrowleft" size={20} color="black" />
                    <Text className="text-lg font-bold">Bidhaa</Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('AddProduct')}
                className="flex-row items-center gap-1">
                    <Feather name="plus-circle" size={20} color="black" />
                    <Text className="text-lg font-bold">Ongeza</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View className="gap-1 mt-3">
                <View className="flex-row justify-center grid-cols-2 gap-2">
                   <View 
                   className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-20">
                    <Text className="text-md font-bold text-slate-500">Idadi ya bidhaa</Text>
                    <Text className="text-lg font-bold text-blue-500">489</Text>
                   </View>
                   <View className="bg-white flex justify-center rounded-lg shadow-lg items-center w-1/2 h-20">
                    <Text className="text-md font-bold text-slate-500">Thamani ya mzigo</Text>
                    <Text className="text-lg font-bold text-blue-500">9,000,000 /=</Text>
                   </View>
                </View>
            </View>

            <View className="mt-3">
            <TextInput
            className="w-full border border-blue-400 rounded-md h-12 px-4"
            placeholder="Tafuta kwa jina...."
            value={null}
            />
            </View>

               {
                productList.map((product) => {
                    return (
                        <View className="mt-3 bg-white p-4 rounded-md shadow-xl w-full flex-row justify-between items-center" key={product.id}>
                        <View>
                        <Text className="text-lg font-semibold">{product.name}</Text>
                        <Text className="font-semibold text-blue-500">Idadi: {product.quantity}</Text>
                        <Text className="font-semibold text-blue-500">Thamani: {(product.quantity * product.purchase_price).toLocaleString()}/=</Text>
                        <Text className="text-sm mt-2 text-slate-600 italic">Imerekodiwa {product.created_at}</Text>
                        </View>
                        <View className="flex-row gap-2 justify-center items-center rounded-lg">
                        <Feather name="trash-2" size={24} color="red" />
                        <Feather name="edit" size={24} color="black" />
                        </View>
                        </View>
                    )
                })
               }  
            </View>
        </KeyboardAwareScrollView>
        </SafeAreaView>
  )
}

export default Products