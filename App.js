import "react-native-gesture-handler";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Categories from './screens/Categories';
import AddCategory from './screens/AddCategory';
import Products from './screens/Products';
import AddProduct from './screens/AddProduct';
import Pos from './screens/Pos';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false
        }
      }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Pos" component={Pos} />
      </Stack.Navigator>
    </NavigationContainer>
    // </GestureHandlerRootView>

  );
}
