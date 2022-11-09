import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground, Touchable, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const OtpScreen = ({navigation})  => {
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,code
        );
        firebase.auth().signInWithCredential(credential).then(()=> {
            setCode('');
        })
        .catch((error) => {
            alert(error);
        });
        Alert.alert(
            'Login Succesful. WelCome To Dashboard'
        )
    }

    const submit = () => {
        confirmCode();
        navigation.navigate("BottomTabNavigator");
    }
    return (
        <View style={style.main}>
            <ImageBackground source={require('../image/bg.png')} resizeMode="cover" style={style.image}>
            <Text style={style.title} >OTP</Text>
            <View style={{ marginTop: 10 }}></View>
            <Input
                placeholder="MaOTP"
                onChangeText={setCode}
            />
            <Button
                title="Xác nhận"
                onPress={submit}
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
            </ImageBackground>
        </View>
    )
}

export default OtpScreen

const style = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    main: {
        marginTop:20,
        height: '100%',
        justifyContent: 'center',

    },
    image: {
        flex: 1,
      },
});