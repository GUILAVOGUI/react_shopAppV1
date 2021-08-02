import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';


import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

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

const ProductsNavigator = createStackNavigator(
    {
        ProductsOverview: ProductsOverviewScreen,
        ProductDetail: ProductDetailScreen,
        // Cart: CartScreen
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