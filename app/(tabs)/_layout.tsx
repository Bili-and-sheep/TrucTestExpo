import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#64FFC7',
            tabBarStyle: {
                backgroundColor: '#022E33',
            },
        }} >
            <Tabs.Screen
                name="product"
                options={{
                    title: 'Produit',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'storefront-sharp' : 'storefront-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="poi"
                options={{
                    title: 'Maps',
                    tabBarIcon: ({ color, focused }) => (

                        <Ionicons name={focused ? 'map-sharp' : 'map-outline'} color={color} size={24} />
                    ),
                }}
            />


            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Panier',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'cart-sharp' : 'cart-outline'} color={color} size={24} />

                    ),
                }}
            />


        </Tabs>
    );
}


