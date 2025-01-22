import { Tabs } from 'expo-router';


export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#5C068C',
            tabBarStyle: {
                backgroundColor: '#814B3D',
            },
        }} >
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="poi" options={{ title: 'Maps' }} />
            <Tabs.Screen name="product" options={{ title: 'Produit' }} />

        </Tabs>
    );
}


