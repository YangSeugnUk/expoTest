import React, {useEffect, useState} from 'react';
import {View, Text, Button} from "react-native";

const App = () => {
    const [datas, setDatas] = useState([]);
    const users = [
        {
            name : "seunguk",
            age :  35,
            gender : "male",
            address : "hh",
        },
        {
            name : "seunguk",
            age :  35,
            gender : "male",
            address : "hh",
        },
        {
            name : "seunguk",
            age :  35,
            gender : "male",
            address : "hh",
        },


    ]
    const getData = () => {
        setDatas(users);

    }
    const clearData = () => {
        setDatas([]);
    }

    // 1순위로 무조건 실행되는 함수.
    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>
                {datas.length}
            </Text>
            <Button
                title="data불러오기"
                onPress={() => getData()}
            />
            {datas.map(data =>(
                <Text>{data.name}</Text>
            ))}
            <Button
                title="data비우기"
                onPress={() => clearData()}
            />
        </View>
    );
};

export default App;