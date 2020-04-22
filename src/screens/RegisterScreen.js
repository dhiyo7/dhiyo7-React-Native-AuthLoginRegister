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
  state ={
    name: "cobalagi",
    email: "cobalagi@gmail.com",
    address:"Pemalang adohe ora umum",
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
    const {name, email, address, password} = this.state;
    const req = {
      "name": name,
      "email": email,
      "address": address,
      "password": password
    }
    axios.post("https://plug-plant.herokuapp.com/user/register", req)
    .then(
      res => {
        console.log(res.data)
      },
      error => {
        alert("Something went wrong")
      }
    )
  }
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
                  <Input placeholder="Input Nama" 
                  value={this.state.name}
                  onChangeText={value => this.setState({ name: value })}/>
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Email" 
                  value={this.state.email}
                  onChangeText={value => this.setState({ email: value })}/>
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Alamat" 
                  value={this.state.address}
                  onChangeText={value => this.setState({ address: value })}/>
                </Item>
                <Item rounded style={{marginTop: 20}}>
                  <Input placeholder="Input Password" 
                  value={this.state.password}
                  onChangeText={value => this.setState({ password: value })}/>
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
