import "react-native-gesture-handler";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/auth/Login';
import Categories from './screens/category/Categories';
import Products from './screens/product/Products';
import AddProduct from './screens/product/AddProduct';
import Pos from './screens/sales/Pos';
import { Provider } from "react-redux";
import store from "./store/store";
import EditCategory from "./screens/category/EditCategory";
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from "react";

const Stack = createNativeStackNavigator();

let desc1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

const slides = [
  {
    key: 1,
    title: 'Welcome',
    text: desc1,
    image: require('./assets/images/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/images/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/images/3.png'),
    backgroundColor: '#22bcb5',
  }
];
 

export default function App() {

  const [showRealApp, setShowRealApp] = useState(false)

  const renderItem = ({ item }) => {
   return (
        <View className="items-center justify-center h-screen bg-green-400 p-4">
          <Text className="text-white text-2xl font-bold">{item.title}</Text>
          <Image source={item.image} className="w-96 h-96" />
          <Text className="text-white text-center text-lg">{item.text}</Text>
        </View>
      );
  }

 const onDone = () => {
   setShowRealApp(true);
 }

  if (showRealApp) {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerShown: false
          }
        }>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="EditCategory" component={EditCategory} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="Pos" component={Pos} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  
    );
  } else {
    return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone}/>;
  }


}
