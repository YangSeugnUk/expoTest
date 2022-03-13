import React, {useEffect,useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from "axios";

const User = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () =>{
        try{
            const {data, status} = await axios.get("https://jsonplaceholder.typicode.com/posts");
            // setPosts(data);
            if(status === 200){
                setPosts(data)
            }


            console.log(status);

        }catch(err) {
            alert(data.response.data.message);
        }




    }

    useEffect(()=>{
        getPosts();

    },[])

    return (
        <ScrollView >
            {posts.map(post => (
                <View style={{flex:1, alignItems:"center", justifyContent:"center" , marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:"800"}}>
                        {post.title}
                    </Text>
                    <Text style={{fontSize:11}}>
                        {post.body}
                    </Text>
                </View>
            ))}


        </ScrollView>
    );
};

export default User;