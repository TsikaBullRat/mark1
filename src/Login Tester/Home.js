import React from 'react'
import { View, Text, Button, NativeModules } from 'react-native'
import { Exit } from './Home.functions';
import { auth } from '../firebase/config'

export const Home = ({navigation}) =>{
    console.log(NativeModules)
    return(
        <View>
            <Text style={{fontSize:50}}>{"Welcome " + auth.currentUser.displayName}</Text>
            <Text style={{fontSize:40}}>User Info:</Text>
            <Text style={{fontSize:20}}>{"ID: " + auth.currentUser.uid}</Text>
            <Text style={{fontSize:20}}>{"display name: " + auth.currentUser.displayName}</Text>
            <Text style={{fontSize:20}}>{"email: " + auth.currentUser.email}</Text>
            <Text style={{fontSize:20}}>{"email verified: " + auth.currentUser.emailVerified}</Text>
            <Text style={{fontSize:20}}>{"phoneNumber: " + auth.currentUser.phoneNumber}</Text>
            <Text style={{fontSize:20}}>{"photo: " + auth.currentUser.photoURL}</Text>
            <Button title="UploadPic" onPress={()=>navigation.navigate("Upload")} />
            <Button title="Log Out" onPress={Exit} />
        </View>
    );
}