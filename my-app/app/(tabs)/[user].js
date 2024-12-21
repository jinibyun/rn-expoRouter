import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Button, Alert } from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function details() {
    const { user } = useLocalSearchParams(); // please note file name [user].js  (this is a special way to pass parameter-->> dynamice pass parameter)
    
    useEffect(() => {
        console.log('user: ' + user);

    }, []);

    return (
        <View>
            <Stack.Screen options={{
                title: 'TITLE!!!'
            }} />
            <Text>
                User: { user }
            </Text>
            
        </View>
    );
}