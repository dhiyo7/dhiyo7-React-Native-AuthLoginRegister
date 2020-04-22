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
  Header,
} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// create a component
class LoginScreen extends Component {
  state = {
    email: 'dhiyo@gmail.com',
    password: '12345678',
    loading: false,
  };

  // state = {
  //   email: '',
  //   password: '',
  //   loading: false,
  // };

  oncChangeHandle(state, value) {
    thsis.setState({
      [state]: value,
    });
  }

  doLogin() {
    const {email, password} = this.state;
    if (email && password) {
      const req = {
        email: email,
        password: password,
      };
      this.setState({
        loading: true,
      });
      axios.post('https://plug-plant.herokuapp.com/user/login', req).then(
        (res) => {
          this.setState({
            loading: false,
          });
          AsyncStorage.setItem('token', res.data.data.token).then((res) => {
            this.props.navigation.navigate('Dashboard');
            alert('Login success');
          });
          // console.warn(res.data.data.token);
        },
        (err) => {
          this.setState({
            loading: false,
          });
          alert('Email and password is wrong');
        },
      );
    } else {
      alert('Enter email & password');
    }
  }

  render() {
    const {email, password, loading} = this.state;
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
              <Input
                placeholder="Input Email"
                value={this.state.email}
                onChangeText={(value) => this.setState({email: value})}
              />
            </Item>
            <Item rounded style={{marginTop: 20}}>
              <Input
                placeholder="Input Password"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(value) => this.setState({password: value})}
              />
            </Item>
          </Body>
          <Right>
            <Button
              rounded
              iconRight
              success
              style={{
                marginTop: 10,
                backgroundColor: loading ? '#ddd' : 'green',
              }}
              onPress={() => this.doLogin()}
              disable={loading}>
              <Text>{loading ? 'Loading cuk..' : 'Login'}</Text>
            </Button>
          </Right>
        </Content>
      </Container>
    );
  }
}

//make this component available to the app
export default LoginScreen;
