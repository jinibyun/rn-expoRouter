import { Link, Stack } from 'expo-router';
import { Button, Image, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

function LogoTitle() {
    return (
        <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
}
/*
To configure the header bar dynamically for an individual route, use that navigator's <Stack.Screen> component in the routes's file. This is useful for interactions that change the UI.
*/
export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'My home',
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
                }}
            />
            <Text>Home Screen</Text>
            <Text>Count: {count}</Text>
            <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
});