import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
    Layout,
    Form,
    Input,
    Checkbox,
    Button,
    Typography,
} from 'antd';
import * as firebase from "firebase/app";
import "firebase/auth";
import 'antd/dist/antd.css';
import axios from 'axios';
import  HeaderMenu  from "../../components/HeaderMenu"

const {Content, Footer } = Layout;


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

class CreateVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlVideo: '',
            urlPhotoVideo: '',
            title: '',
            desc: '',
            isLoggedIn: false,
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user) {
            console.log('USUÁRIO LOGADO' );
            this.setState({isLoggedIn: true});
          } else {
            console.log('USUÁRIO SAIU');
            this.setState({isLoggedIn: false})
          }
        });
      }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onClickToSignup = async (e) => {
        e.preventDefault();
        
       const videos = {
           urlVideo: this.state.urlVideo,
           urlPhotoVideo: this.state.urlPhotoVideo,
           title: this.state.title,
           desc: this.state.desc
       }

       const token = await firebase.auth().currentUser.getIdToken();

        await axios.post('https://us-central1-f4tube-e7be0.cloudfunctions.net/f4Api/createVideo', videos, {
            headers: {
                auth: token
            }
        }) 
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
                                <Title level={2}>Envie um vídeo</Title>
                                <Form
                                    {...formItemLayout}
                                    scrollToFirstError
                                >
                                    <Form.Item
                                        name="urlVideo"
                                        label="Url do Vídeo"
                                        rules={[

                                            {
                                                required: true,
                                                message: 'Por favor, insira um link do vídeo!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.urlVideo}
                                            onChange={this.handleInputChange}
                                            name={'urlVideo'}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="urlPhotoVideo"
                                        label="Capa do Vídeo"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira link para capa do vídeo!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.urlPhotoVideo}
                                            onChange={this.handleInputChange}
                                            name={'urlPhotoVideo'}
                                        />
                                    </Form.Item>
                                    
                                    <Form.Item
                                        name="title"
                                        label="Título do Vídeo"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira um título para vídeo!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name={'title'}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="desc"
                                        label="Descrição do Vídeo"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor, insira uma descrição para vídeo!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            value={this.state.desc}
                                            onChange={this.handleInputChange}
                                            name={'desc'}
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

export default CreateVideo;