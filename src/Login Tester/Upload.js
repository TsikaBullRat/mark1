import React from 'react'
import { Button, View } from 'react-native'
import {Add} from './Upload.function'

export const Upload = () =>{
    return(
        <View>
            <Button title="Add" onPress={Add}/>
            <Button title="Upload" />
        </View>
    )
} 