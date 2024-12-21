import { Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Button, Alert } from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function details() {
    const { id } = useLocalSearchParams(); // please note file name [id].js  (this is a special way to pass parameter-->> dynamice pass parameter)
    
    useEffect(() => {
        console.log('id: ' + id);

    }, []);

    return (
        <View>
            <Stack.Screen options={{
                title: 'TITLE!!!'
            }} />
            <Text>
                something....
            </Text>
            
        </View>
    );
}