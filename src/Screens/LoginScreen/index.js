import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, Touchable } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { Api } from "../../Global/Axios/Api";
const LoginScreen = ({navigation}) => {
    global.foo = "test"
    const [input, setInput] = useState({
        phonenumber: "",
        password: "",
      
    });
    const handleLogin = async (event)=>{
        //validate()
     
        const {phonenumber,password} = input;
        const { data } = await Api.post(`http://192.168.14.107:5000/api/auth/login`, { 
            phonenumber,
            password,
        });
        if(data.status ===false){
            console.log(data.msg)
        }
        if(data.status ===true){
            console.log("Thanh cong");
            navigation.navigate("BottomTabNavigator",{data});
        }
    }
    // console.log(input)
    return (
        <View style={style.main}>
            <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={style.image}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: 250, height: 250, }}
                    source={require('../image/avata.png')}
                />
            </View>
            <Text style={style.title} >Login User</Text>
            <View style={{ marginTop: 10 }}></View>
            <Input
                onChangeText={(text) =>
                    setInput({ ...input, phonenumber: text })
                }
            placeholder="Enter your email or phone"
                leftIcon={
                    <Icon
                        name="mail"
                        size={24}
                        color='black'
                    />
                }
            />

            <Input placeholder="Enter your password"
             onChangeText={(text) =>
                setInput({ ...input, password: text })
            }
            secureTextEntry={true}
                leftIcon={
                    <FontAwesome
                        name="lock"
                        size={24}
                        color='black'
                    />
                }
            />
            <Button
                title="Login"
                onPress={ handleLogin}
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                    backgroundColor: 'rgba(111, 202, 186, 1)',
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
            <View style={{flexDirection:'row',marginTop:10,justifyContent: 'center',}}>
                <Text style={{fontWeight:'bold', fontSize:17}}>Have hot a accoutnt?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}><Text style={{fontWeight:'bold', fontSize:17,color:'skyblue',marginLeft:10}}>SignUp</Text></TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const style = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    main: {
        height: '100%',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
      },
});