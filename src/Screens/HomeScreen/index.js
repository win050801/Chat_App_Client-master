import React from "react";
import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import ActiveUser from "./ActiveUser";
import Recent from "./Recent";

const HomeScreen = (props) => {
    const user = props.user
    console.log(user);
    return (
            <FlatList
                data={[]}
                ListHeaderComponent={()=><ActiveUser user = {user}/>}
                ListFooterComponent={()=><Recent user = {user} />}
            />
    )
}

export default HomeScreen

const style = StyleSheet.create({})