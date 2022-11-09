import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome";
import Icon2 from "@expo/vector-icons/AntDesign";

import { theme } from "../../theme";

const ChatHeader = () => {
	// const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.backButton} >
				<Icon name="angle-left" size={30} color={theme.colors.white} />
			</TouchableOpacity>
			<View style={styles.profileOptions}>
				<TouchableOpacity style={styles.profile}>
					<Image style={styles.hinh}  />
					<View style={styles.usernameAndOnlineStatus}>
						<Text style={styles.username}>Duc</Text>
						<Text style={styles.onlineStatus}>Online</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.options}>
					<TouchableOpacity
						style={{ paddingHorizontal: 5 }}
					>
						<Icon
							name="phone"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ paddingHorizontal: 10 }}
					>
						<Icon
							name="video-camera"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ paddingHorizontal: 10 }}>
						<Icon2
							name="bars"
							size={30}
							color={theme.colors.white}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor:'#00bfff',
		paddingTop: 40,
		paddingBottom: 10,
	},
	backButton: {
		alignSelf: "center",
		paddingHorizontal: 10,
	},
	profileOptions: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		borderColor: "#fff",
		flex: 4,
	},
	hinh: {
		height: 65,
		width: 65,
		borderRadius: 32.5,
		backgroundColor:'blue'
	},
	usernameAndOnlineStatus: {
		flexDirection: "column",
		justifyContent: "center",
		paddingHorizontal: 10,
		
	},
	username: {
		color: theme.colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	onlineStatus: {
		color: theme.colors.white,
		fontSize: 16,
	},
	options: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
});

export default ChatHeader;