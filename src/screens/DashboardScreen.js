import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';


export default class ButtonRoundedExample extends Component {

    doLogout() {
        AsyncStorage.removeItem('token')
        .then(result => {
            this.props.navigation.navigate('Login')
        })
    }

  render() {
    return (
      <Container>
        <Content>
          <Button padder rounded danger style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => this.doLogout()}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}