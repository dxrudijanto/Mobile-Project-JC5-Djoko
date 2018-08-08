import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Content, Form, Item, Input, Button, Text, 
  Left, Right, Icon, Body, Title } 
from 'native-base';

class App extends Component {
  render() {
    return (
      <Container>
      
        <Header>
          <Left>
            <Button transparent><Icon name='menu' /></Button>
          </Left>
          {/* <Body><Title>My App Test</Title></Body> */}
          <Right>
            <Body><Title> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Register </Title></Body>
            <Button transparent onPress={
              () => this.props.navigation.navigate('HalRegis')
          } ><Icon name='person' /></Button>
          </Right>
        </Header>
      
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" secureTextEntry={true} />
          </Item>

           
          <Button block primary style={{marginTop:100}} onPress={
              () => this.props.navigation.navigate('HalSatu')
          } >
            <Text> Sign-in </Text>
          </Button>
       

        </Form>
      </Content>

        <Footer><FooterTab>
          <Button vertical active><Icon name="apps" />
            <Text> Apps </Text></Button>
          <Button vertical><Icon name="camera" />
            <Text> Camera </Text></Button>
          <Button vertical><Icon active name="navigate" />
            <Text> Navigate </Text></Button>
          <Button vertical><Icon name="person" />
            <Text> Contact </Text></Button>
        </FooterTab></Footer>


    </Container>
    );
  }
}

export default App;


