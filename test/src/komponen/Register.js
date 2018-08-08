import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Content, Form, Item, Input, Button, Text, 
  Left, Right, Icon, Body, Title } 
from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
      
        <Header>

          <Body><Title>Register Here </Title></Body>

        </Header>
      
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item>
            <Input placeholder="Email" />
          </Item>
          <Item last>
            <Input placeholder="Password" secureTextEntry={true} />
          </Item>

           
          <Button block danger style={{marginTop:100}} onPress={
              () => this.props.navigation.navigate('HalLogin')
          } >
            <Text> Register </Text>
          </Button>
       

        </Form>
      </Content>

    </Container>
    );
  }
}

export default App;


