import React, { useState, useRef, useEffect } from "react";
import { ScrollView } from "react-native";
import { Api } from "../../Global/Axios/Api";
import Message from "./Message";

import { theme } from "../../theme";

const MessagesList = ({route}) => {

    const from = route.params.user._id
    // console.log(route.params);
    const to = route.params.to
	const [messages, setMessages] = useState([
	]);

    useEffect( () => {
          async function fetchData() {
             
              const { data } = await Api.post(`http://192.168.14.107:5000/api/messages/getmsg`, { 
              from,to
              });
              setMessages(data)
          }
          fetchData();
        });

	const user = useRef(0);
	const scrollView = useRef();

	return (
		<ScrollView style={{ backgroundColor: theme.colors.white, flex: 1 }}
			ref={ref => scrollView.current = ref}
			onContentChange={() => {
				scrollView.current.scrollToEnd({ animated: true })
			}}
		> 
			{messages.map((message, index) => (
				<Message
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