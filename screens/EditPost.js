import { View, Text, TextInput, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CreateData, GetData } from '../services/FetchApi'
import * as ImagePicker from 'expo-image-picker';


const EditPost = ({ route, navigation }) => {

  const post = route.params.data
  const [title, setTitle] = useState(post.title)
  const [desc, setDesc] = useState(post.desc)
  const [data, setData] = useState([])
  const [image, setImage] = useState(post.image)


  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  useEffect(() => {
    GetData({ endpoint: post.id, method: 'GET', headers: headers })
      .then((res) => {
        if (res.status === 200) {
          setData(res.response.data)
        }
        if (res.status === 404) {
          console.log('Route not found!');
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }, [])


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

  const handleEdit = () => {
    CreateData({ endpoint: post.id, method: 'PUT', body: body })
    navigation.push('SinglePost', { data: data.id })
  }


  return (
    <View>
      <TextInput defaultValue={title} onChangeText={(title) => setTitle(title)} />
      <TextInput defaultValue={desc} onChangeText={(desc) => setDesc(desc)} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title='Edit' onPress={handleEdit} />
    </View>
  )
}

export default EditPost