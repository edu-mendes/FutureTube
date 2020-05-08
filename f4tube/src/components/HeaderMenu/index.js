import React from 'react';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Typography } from 'antd';
import "firebase/firestore";
import { YoutubeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import LoginPage from "../../containers/LoginPage"

const { Header } = Layout;
const { Title } = Typography;


class HeaderMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header className="header">
                <div className="logo">
                    <YoutubeOutlined style={{ fontSize: '30px', color: '#08c' }} />
                    <Title level={3} style={{ color: 'white' }}>FutureTube</Title>
                </div>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1" onClick={this.props.goToHome}>Home Page</Menu.Item>
                    <Menu.Item key="2" onClick={this.props.goToSignupPage}>Registro</Menu.Item>
                    <Menu.Item key="3" onClick={this.props.goToCreateVideo}>Upload</Menu.Item>
                    <Menu.Item key="4" onClick={this.props.goToAllVideos}>Todos os Vídeos</Menu.Item>
                    <Menu.Item key="5"><LoginPage /></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToCreateVideo: () => dispatch(push(routes.createVideo)),
        goToSignupPage: () => dispatch(push(routes.signupPage)),
        goToHome: () => dispatch(push(routes.home)),
        goToAllVideos: () => dispatch(push(routes.allVideo))
    }
}

export default connect(null, mapDispatchToProps)(HeaderMenu);