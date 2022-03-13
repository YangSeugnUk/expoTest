import React, {useEffect, useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from "axios";

const MovieDetail = () => {
    //1
    const [movie, setMovie] = useState({});

    //3
    const getMovie = async () => {
        try {
           const {data, status} =  await axios.get("https://api.themoviedb.org/3/movie/966?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US");

           if(status === 200){
               setMovie(data);
           }
        }catch (err){
            console.log(err)
        }
    }


    //2
    useEffect(() => {
        getMovie();
    },[])

    return (
        <ScrollView>
            <View style={{flex:1, height:500, alignItems:'center', justifyContent:'center'}}>
                <Text>
                    {movie.original_title}
                </Text>
                <Text style ={{marginBottom:20}}>
                    {movie.overview}
                </Text>
                {movie.projection_compaines || movie.production_companies.map(company =>(
                    <Text>
                        {company.name}
                    </Text>
                ))}



            </View>


        </ScrollView>
    );
};

export default MovieDetail;