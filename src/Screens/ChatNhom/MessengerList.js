import React, { useState, useRef, useEffect } from "react";
import { ScrollView ,Text} from "react-native";
import { Api } from "../../Global/Axios/Api";
import MessageChatNhom from "./MessageChatNhom";

import { theme } from "../../theme";

const MessagesList = ({route,roomChat,user}) => {
	const [messages, setMessages] = useState([]);

   useEffect( ()=>{
	async function fetchData() {
		const { data } = await Api.post(`http://192.168.14.107:5000/api/messages/getMessagesRoom`, { 
		id:roomChat.id,
		from:user._id
    });
	console.log(data);
	setMessages(data)
	// console.log("test");
	}
	fetchData();
	
   },[])

	// const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			
			{messages.map((message, index) => (
				<MessageChatNhom
					key={index}
					time={message.time}
					isLeft={message.fromSelf !== true}
					message={message.message}
				/>
				
			))}
		</ScrollView>
	);
};

export default MessagesList;