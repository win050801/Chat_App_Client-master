import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Alert,
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Api } from "../../Global/Axios/Api";
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from "../../FirebaseConfig/firebase";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const SignUpScreen = ({ navigation }) => {

    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider.verifyPhoneNumber(input.phonenumber,recaptchaVerifier.current)
        .then(setVerificationId);
    }
    
    const [errorsMsg, setErrorsMsg] = useState("");
    const [input, setInput] = useState({
        username: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
    });

    const validate = () => {
        if (
            input.username === "" ||
            input.phonenumber === "" ||
            input.password === "" || 
            input.confirmPassword === ""
        )
        {
            return Alert.alert(
                "Lỗi",
                "Vui lòng điền đầy đủ thông tin"
            );
        }
        else if(input.phonenumber.length > 15 || input.phonenumber.length < 10)
        {
            return Alert.alert(
                "Lỗi",
                "Vui lòng điền số điện thoại 10 hoặc 11 số"
            );
        }
    
        else if(input.confirmPassword !== input.password)
        {
            console.log(input.password);
            return Alert.alert(
                "Lỗi",
                "Vui lòng nhập giống mật khẩu trên"
            );
        }
        
        return true;
    };

    

    console.log(input);
    const submitData = async (event) => {
        event.preventDefault();
        if(validate()==true){
        const { phonenumber, username, password } = input;
        const { data } = await Api.post(`http://192.168.14.106:5000/api/auth/register`, {
            username,
            phonenumber,
            password,
        });
        console.log(data);
        if (data.status === false) {
            Alert.alert(
                data.msg
            );
            console.log(data.msg);
        }
        if (data.status === true) {
            console.log("Thanh cong");
            // localStorage.setItem(
            //     process.env.REACT_APP_LOCALHOST_KEY,
            //     JSON.stringify(data.user)
            // );
            // navigate("/messenger");
        // }
        sendVerification();
        navigation.navigate("OtpScreen");
        }
        }
        
    };

    return (
        <View style={style.main}>
            <ImageBackground
                source={require("../image/bg.png")}
                resizeMode="cover"
                style={style.image}
            >
                <FirebaseRecaptchaVerifierModal 
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                />
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: 250, height: 250 }}
                        source={require("../image/avata.png")}
                    />
                </View>
                <Text style={style.title}>Create a account</Text>
                <View style={{ marginTop: 10 }}></View>
                <Input
                    onChangeText={(text) =>
                        setInput({ ...input, username: text })
                    }
                    // onChangeText={(e) => handleChange(e)}
                    placeholder="Enter your name"
                    name="username"
                    leftIcon={
                        <FontAwesome name="user" size={24} color="black" />
}
                />
                <Input
                    onChangeText={(text) =>
                        setInput({ ...input, phonenumber: text })
                    }
                    name="phonenumber"
                    // onChangeText={(e) => handleChange(e)}
                    placeholder="Enter your phone"
                    leftIcon={<Icon name="mail" size={24} color="black" />}
                    errorMessage={errorsMsg.phonenumber}
                />

                <Input
                    onChangeText={(text) =>
                        setInput({ ...input, password: text })
                    }
                    // onChangeText={(e) => handleChange(e)}
                    name="password"
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    leftIcon={
                        <FontAwesome name="lock" size={24} color="black" />
                    }
                />
                <Input
                    onChangeText={(text) =>
                        setInput({ ...input, confirmPassword: text })
                    }
                    // onChangeText={(e) => handleChange(e)}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                    leftIcon={
                        <FontAwesome name="lock" size={24} color="black" />
                    }
                />

                <Button
                    onPress={submitData}
                    title="SignUp"
                    loading={false}
                    loadingProps={{ size: "small", color: "white" }}
                    buttonStyle={{
                        backgroundColor: "rgba(111, 202, 186, 1)",
                        borderRadius: 15,
                    }}
                    titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                        marginVertical: 10,
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                        Have hot a accoutnt?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 17,
                                color: "skyblue",
                                marginLeft: 10,
                            }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
</ImageBackground>
        </View>
    );
};

export default SignUpScreen;

const style = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
    },
    main: {
        height: "100%",
        justifyContent: "center",
    },
    image: {
        flex: 1,
    },
});