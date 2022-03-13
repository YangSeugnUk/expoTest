import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import axios from "axios";

const App = () => {

    //1. 상태선언
    const [movies, setMovies] = useState([])

    //3. 네트워킹 및 파싱 함수 선언
    const getMovies = async () =>{
        try{

            const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            if ( status === 200 )
            {
                setMovies(data.results);
            }

        }catch (err){
            alert(err.response.data.message);
        }

    }

    //2. Effect 선언
    useEffect(() => {
        getMovies();
    },[])

    return (
        <ScrollView >
            <View style={{alignItems:"center" }}>
                {movies.map(movie => (
                    <>
                        <Text style={{color:"purple"  }}>
                            {movie.original_title}
                        </Text>
                        <Text style={{marginBottom:40}}>
                            {movie.overview}
                        </Text>
                        <Image
                            style={{width:300, height:300}}
                            source={{
                                uri : "https://image.tmdb.org/t/p/w500"+movie.poster_path
                            }}
                        />
                    </>

                ))}
            </View>
        </ScrollView>
    );
};

export default App;