import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home