import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
import ChatHeader from "../ChatNhom/ChatHeader";
import ChatInput from "../ChatNhom/ChatInput";
import MessengerList from "../ChatNhom/MessengerList";

export function ChatNhom({navigation,route,props,data}) {
 
  console.log(route.params);
  return(
    <View style={{flex:1}}>
      <ChatHeader roomChat={route.params.item} />
      <MessengerList roomChat={route.params.item} user ={route.params.user} />
      <ChatInput  roomChat={route.params.item} user ={route.params.user}/>
    </View>
  )
}

export default ChatNhom