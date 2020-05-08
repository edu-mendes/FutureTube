import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
    Layout,
    Form,
    Input,
    Tooltip,
    Checkbox,
    Button,
    Typography,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import * as firebase from "firebase/app";
import "firebase/auth";
import 'antd/dist/antd.css';
import  HeaderMenu  from "../../components/HeaderMenu"

const {  Content, Footer } = Layout;


const { Title } = Typography;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            nickname: ''
        };
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onClickToSignup = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().createUserWithEmailAndPassword(
                this.state.email, 
                this.state.password
                ).then(userCredential => {
              const user = userCredential.user;
            firebase.firestore().collection('users').doc(user.uid).set({
                name: this.state.name,
                email: this.state.email, 
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
                nickname: this.state.nickname,
            })
            });
          } catch (e) {
            console.log(e.message)
          }

    }
    render() {
        return (
            <Layout>
                <HeaderMenu />
                <Content style={{ padding: '0 50px' }}>
                    <Content style={{ margin: '40px' }} />
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: '550px' }}>
                            <Content style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '640px', padding: '20px' }}>
                                <Title level={2}>Register</Title>
                                <Form
                                    {...formItemLayout}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="name"
                                        label="Nome"
                                        rules={[

                                            {
                                                required: true,
                                                message: 'Por favor, insira seu Nome!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            name={'name'}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'Esse e-mail não é um  válido!',
                                            },
                                            {
                                                required: true,
                                                message: 'Por favor, insira seu E-mail!',
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
                                        name="password"
                                        label="Senha"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira sua senha!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name={'password'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirmPassword"
                                        label="Confirmar Senha"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, confirme sua senha!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(rule, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }

                                                    return Promise.reject('As duas senhas que você digitou não coincidem!');
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password
                                            value={this.state.confirmPassword}
                                            onChange={this.handleInputChange}
                                            name={"confirmPassword"}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="nickname"
                                        label={
                                            <span>
                                                Nickname&nbsp;
                                                    <Tooltip title="Como você quer que os outros chamem você?">
                                                    <QuestionCircleOutlined />
                                                </Tooltip>
                                            </span>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira seu nickname!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.nickname}
                                            onChange={this.handleInputChange}
                                            name={"nickname"}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject('Deve aceitar acordo'),
                                            },
                                        ]}
                                        {...tailFormItemLayout}
                                    >
                                        <Checkbox>
                                            I have read the <a href="">agreement</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" onClick={this.onClickToSignup}>
                                            Registar
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Content>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>FutureTube ©2020 </Footer>
            </Layout>
        )
    }
}

export default SignupPage;