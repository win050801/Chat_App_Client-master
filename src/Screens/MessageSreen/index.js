import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import ChatHeader from "../MessageSreen/ChatHeader";
import ChatInput from "../MessageSreen/ChatInput";
import MessengerList from "../MessageSreen/MessengerList";
export function MessageScreen({navigation,route}) {
// console.log(route.params);
  return(
    <View style={{flex:1}}>
      <ChatHeader route={route} />
      <MessengerList route={route}/>
      <ChatInput route={route} />
    </View>
  )
}

export default MessageScreen