import { Stack, Slot } from 'expo-router';

/*
Expo Router supports adding a single layout route for a given directory. If you want to use multiple layout routes, add multiple directories:
*/

/* Root Layout
add providers which can be accessed by any route in the app.
*/
export default function HomeLayout() {
    /* Navigation Pattern
    1. Stack

    */

    return (
        <Stack
        // This is useful for setting a common header style across all routes.
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="home" options={{}} />
        </Stack>
    );

}
