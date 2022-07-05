import { View, Text, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'
import { CreateData, GetData } from '../services/FetchApi'
import * as ImagePicker from 'expo-image-picker';

const CreatePost = ({ route, navigation }) => {


  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState(null)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const body = JSON.stringify({
    title: title,
    desc: desc,
    image: image
  })

  const handleSumbit = () => {


    CreateData({ endpoint: '', method: 'POST', body: body })
    navigation.push('AllPosts')
  }

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput placeholder='Enter Title' onChangeText={(title) => setTitle(title)} />
      <TextInput placeholder='Enter Description' onChangeText={(desc) => setDesc(desc)} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title='Submit' onPress={handleSumbit} />
    </View>
  )
}

export default CreatePost