import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Drawer} from 'antd';
import  InputLogin  from '../../components/InputLogin'


class LoginPage extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
       <span onClick={this.showDrawer}>
       Fazer Login
        <Drawer
          width={440}
          title="Fazer Login"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <InputLogin />
        </Drawer>
        </span>
      </div>
    );
  }
}

export default LoginPage;