import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ToastAndroid, Alert, TouchableHighlightBase} from 'react-native';

export default class LoginScreen extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
      emailID : '',
      password : '',
    }
  }

  login = async(email, password) => 
  {
    if(email && password)
    {
      try{const response = await firebase.auth.signInWithEmailAndPassword(email, password)
      if(response)
      {
        this.props.navigation.navigate('Transaction')
      }}

      catch(error)
      {
        switch(error.code) 
        { 
          case 'auth/user-not-found': Alert.alert("user dosen't exists") 
          console.log("doesn't exist") 
          break;
          case 'auth/invalid-email': Alert.alert('incorrect email or password') 
          console.log('invaild') 
          break;
        }
      }
    }
  }
    render()
    {
      return(
        <View>
        <KeyboardAvoidingView>

            <View>
                <Image source = {require("../assets/searchingbook.png")} style = {{ width : 200, height : 200}}></Image>
                <Text>Wireless Library</Text>
            </View>

            <View>

            <TextInput 
             style = {styles.loginBox} 
             placeholder = "abc@example.com" 
             keyboardType = "email-address"
             onChangeText = {(text) => 
             {
               this.setState(
                   {
                     emailID : text
                   })
             }}>
            </TextInput>

            <TextInput
            style = {styles.loginBox} 
            placeholder = "Enter Password" 
            onChangeText = {(text) => 
            {
              this.setState(
                  {
                    password : text
                  })
            }}>
            </TextInput>

            </View>

            <View>

            <TouchableOpacity 
            style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
            onPress = {() => 
            {
              this.login(this.state.emailID, this.state.password)
            }}>
            <Text>Login</Text>
            </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
        </View>
      )
    }
}

const styles = StyleSheet.create(
{ 
     loginBox: 
     { 
       width: 300, 
       height: 40,
       borderWidth: 1.5, 
       fontSize: 20, 
       margin:10, 
       paddingLeft:10 
     },
})