import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';



import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import CartScreen from '../screens/shop/CartScreen';
import MenuScreen from '../screens/shop/MenuScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

import Colors from '../constants/Colors';


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',

    },
    headerBackTitleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
const OrdersNavigator = createStackNavigator(
    {
        Orders: OrdersScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

// const AdminNavigator = createStackNavigator(
//     {
//         UserProducts: UserProductsScreen
//     },
//     {
//         defaultNavigationOptions: defaultNavOptions
//     }
// )


const ProductsNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail: ProductDetailScreen,
        Cart: CartScreen,
        Menu: MenuScreen,
        Orders: OrdersScreen,
        Admin: UserProductsScreen,
        EditProduct: EditProductScreen,
    },
    {
        // navigationOptions: {
        //     drawerIcon: drawerConfig => (
        //         <Ionicons
        //             name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        //             size={23}
        //             color={drawerConfig.tintColor}
        //         />
        //     )
        // },
        defaultNavigationOptions: defaultNavOptions
    }
);

const ShopNavigator = createStackNavigator({
    ProductsShop: ProductsNavigator,
    OrdersShop: OrdersNavigator
},
    {
        defaultNavigationOptions: defaultNavOptions

    }
)



// const ProductsNavigator = createStackNavigator(
//     {
//         ProductsOverview: ProductsOverviewScreen,
//         ProductDetail: ProductDetailScreen
//     },
//     {
//         defaultNaviationOptions: {
//             headerStyle: {
//                 backgroundColor: Platform.OS === 'android' ? Colors.primary : 'red'
//             },
//             headerTitleStyle: {
//                 fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',
//             },
//             headerBackTitleStyle: {
//                 fontFamily: Platform.OS === 'ios' ? 'Avenir-Roman' : 'sans-serif-medium',
//             },
//             headerTintColor: Platform.OS === 'android' ? 'red' : Colors.primary, // For Header Text color

//         }
//     }
// );

export default createAppContainer(ProductsNavigator)