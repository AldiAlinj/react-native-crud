import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetData } from '../services/FetchApi'


const AllPosts = ({ navigation }) => {

 const [data, setData] = useState()


    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    useEffect(() => {
        GetData({endpoint : '', method : 'GET', headers: headers })
        .then((res) => {
            if(res.status === 200) {
                setData(res.response.data)
                console.log(datar);
            }
            if(res.status === 404) {
                console.log('Route not found!');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    
    }, [])


    return (
        <View style={{ flex: 1, padding: 24 }}>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View>
                        <Text style={{ padding: 10, backgroundColor: 'black', color: 'white', textAlign: 'center' }} onPress={() => navigation.navigate('SinglePost', { data: item.id })}>{item.title}</Text>
                        <Text style={{ padding: 10, backgroundColor: 'orange', textAlign: 'center' }}>{item.desc}</Text>
                        {item.image ? <Image source={{uri: item.image }} resizeMode='contain' style={{ width: 100, height: 100 }} /> : null}
                    </View>
                )}
            />

           
        </View>
    )
}

export default AllPosts