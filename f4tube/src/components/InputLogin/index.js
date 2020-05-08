import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class InputLogin extends React.Component  {
  constructor(props){
      super(props)
      this.state = {
          email: '',
          password: ''
      }
  }


handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value})
};

onClickToSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      return userCredential.user;
    } catch (e) {
      console.log(e.message);
    }
  };

  render(){
   

    return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input 
                value={this.state.email}
                onChange={this.handleInputChange}
                name={'email'}
            />
          </Form.Item>
    
          <Form.Item
                label="Senha"
                name="password"
                rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password 
            value={this.state.password}
            onChange={this.handleInputChange}
            name={'password'}
            />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={this.onClickToSignup}>
              Entrar
            </Button>
          </Form.Item>
        </Form>
      );
  }
  
};

export default InputLogin;