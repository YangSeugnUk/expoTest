import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import axios from "axios";

const Movie = () => {

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
                {movies.map(movie => (
                    <View key={movie.id} style={{alignItems:"center", margin:10 }}>
                        <Text style={{color:"purple"  }}>
                            {movie.original_title}
                        </Text>
                        <Text>
                            {movie.overview}
                        </Text>
                        <Image
                            style={{width:300, height:300}}
                            source={{
                                uri : "https://image.tmdb.org/t/p/w500"+movie.poster_path
                            }}
                        />
                    </View>

                ))}
        </ScrollView>
    );
};

export default Movie;