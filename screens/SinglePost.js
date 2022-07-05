import { View, Text, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetData } from '../services/FetchApi'

const SinglePost = ({ route, navigation }) => {

  const post = route.params.data
  const [data, setData] = useState({})
  console.log(post);

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  useEffect(() => {
    GetData({ endpoint: post, method: 'GET', headers: headers })
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


  const handleDelete = () => {
    GetData({ endpoint: post, method: 'DELETE', headers: headers })
    navigation.push('AllPosts')
  }

  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>{data.title}</Text>
        <Text style={{ backgroundColor: 'orange', textAlign: 'center' }}>{data.desc}</Text>
        <Image source={{ uri: data.image }} resizeMode='contain' style={{ width: 100, height: 100 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button title="Edit" onPress={() => navigation.navigate('EditPost', { data: data })} />
        <Button title="Delete" onPress={handleDelete} />
      </View>
    </View>

  )
}

export default SinglePost