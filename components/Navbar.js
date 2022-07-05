import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {

    const navigation = useNavigation();

  return (
    <View style={{ flexDirection:'row', marginBottom: 10, justifyContent: 'space-around' }}>
      <Button onPress={() => navigation.navigate('Home')} title='Home' />
      <Button onPress={() => navigation.navigate('AllPosts')} title='All Posts' />
      <Button onPress={() => navigation.navigate('CreatePost')} title='Create Post' />
    </View>
  )
}

export default Navbar