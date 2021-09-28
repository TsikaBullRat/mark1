import React, {useState} from 'react'
import { View, TextInput, Button } from 'react-native'
import { Submit } from './Login.functions';

export const Login = ({navigation}) =>{
    const 
        [password, setPassword] = useState(""), 
        [email, setEmail] = useState("");
    
    return (
        <View>
            <TextInput placeholder="Email" onChangeText={text=>setEmail(text)} />
            <TextInput placeholder="Password" onChangeText={text=>setPassword(text)} />
            <Button title="Login" onPress={()=>Submit(email, password)} />
            <Button title="Sign Up" onPress={()=>navigation.navigate("Signup")} />
        </View>
    );
}