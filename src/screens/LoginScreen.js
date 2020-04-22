//import liraries
import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Text,
  Content,
  Item,
  Input,
  Right,
  Left,
  Button,
  Body,
  Header
} from 'native-base';
import axios from 'axios';

// create a component
class LoginScreen extends Component {

  state ={
    email: "dhiyo@gmail.com",
    password: "12345678",
  }

  // state ={
  //   email: "",
  //   password: "",
  // }

  oncChangeHandle(state, value){
    thsis.setState({
      [state]: value
    })
  }

  doLogin(){
    const {email, password} = this.state;
    const req = {
      "email": email,
      "password": password
    }
    axios.post("https://plug-plant.herokuapp.com/user/login", req)
    .then(
      res => {
        console.log(res.data)
      }
    )
  }

  render() {
    const {email, password} = this.state
    return (
      <Container>
        <Content padder>
          <Right>
            <Left>
              <Text style={{fontSize: 30, marginTop: 100, marginBottom: 10}}>
                Login Screen
              </Text>
            </Left>
          </Right>
          {/* Card Main */}

          <Body>
            <Item rounded style={{marginTop: 30}}>
              <Input placeholder="Input Email"
              value={this.state.email}
              onChangeText={val => this.setState({ email: val })} />
            </Item>
            <Item rounded style={{marginTop: 20}}>
              <Input placeholder="Input Password" 
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={val => this.setState({ password: val })}/>
            </Item>
          </Body>
          <Right>
            <Button  rounded iconRight success style={{marginTop:10}}
            onPress={() => this.doLogin()}>
              <Text>Success</Text>
            </Button>
          </Right>
        </Content>
      </Container>
    );
  }
}

//make this component available to the app
export default LoginScreen;
