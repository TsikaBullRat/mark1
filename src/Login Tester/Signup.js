import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { Submit } from './Signup.functions';

export const Signup = () => {

    const 
        [password, setPassword] = useState(""), 
        [email, setEmail] = useState(""),
        [fname, setFname] = useState(""),
        [lname, setLname] = useState("");
    
    return (
        <View>
            <TextInput placeholder="Firstname" onChangeText={text=>setFname(text)} />
            <TextInput placeholder="Lastname" onChangeText={text=>setLname(text)} />
            <TextInput placeholder="Email" onChangeText={text=>setEmail(text)} />
            <TextInput placeholder="Password" onChangeText={text=>setPassword(text)} />
            <Button title="Sign Up" onPress={()=>Submit(email, password, fname, lname )} />
        </View>
    );
}
