//import liraries
import React, { Component } from 'react';
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
// create a component
class RegisterScreen extends Component {
    render() {
        return ( <Container>
            <Content padder>
              <Right>
                <Left>
                  <Text style={{fontSize: 30, marginTop: 150, marginBottom: 10}}>
                    Register Screen
                  </Text>
                </Left>
              </Right>
              {/* Card Main */}
    
              <Body>
                <Item rounded style={{marginTop: 30}}>
                  <Input placeholder="Input Nama" />
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Email" />
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Alamat" />
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Password" />
                </Item>
              </Body>
              <Right>
                <Button  rounded iconRight success style={{marginTop:10}}
                onPress={() => this.props.navigation.navigate('Login')}>
                  <Text>Register</Text>
                </Button>
              </Right>
            </Content>
          </Container>
        );
    }
}
export default RegisterScreen;
