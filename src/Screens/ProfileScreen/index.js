import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Input } from 'react-native-elements';
import { SocialIcon,Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({navigation}) => {
    const [edit, setEdit] = useState(true)
    return (
        <View>
            <View style={{ alignSelf: 'center', marginVertical: 10 }}>
            <TouchableOpacity onPress={()=>setEdit(!edit)} style={{alignSelf:'flex-end'}}>
                {edit && <Feather color='red' name="edit" size={25} />}
                {!edit && <MaterialIcons name="done" size={25}/>}
            </TouchableOpacity>
                <Avatar
                    rounded
                    size='xlarge'
                    source={{ uri: 'https://i.pinimg.com/564x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg' }} />
            </View>
            <Input label={"Your Name"} value="Đức" disaed={edit} />
            <Input label={"Your Date"} value="12-05-2001" disabled={edit} />
            <Input label={"Your Email"} value="hihi@gmail.com" disabled={edit} />
            <Input label={"Your Phone"} value="0334548131" disabled={edit} />


            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <SocialIcon
                    type="twitter"
                />
                <SocialIcon
                    light
                    type='youtube'
                />
                <SocialIcon
                    light
                    type="instagram"
                />
                <SocialIcon
                    title="Sign In With Facebook"
                    type="facebook"
                />
            </View>
            <Button
                title="Logout"
                onPress={() => navigation.navigate("LoginScreen")}
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: 'red',
                    borderRadius: 15,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 300,
                    marginVertical: 10,
                }}
            />
        </View>
    )
}

export default ProfileScreen

const style = StyleSheet.create({})