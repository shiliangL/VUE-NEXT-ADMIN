import React, { Component } from 'react'
import { Form, Icon, Input, Button, notification } from 'antd';
import { login, register } from '@/api/app'
import './index.scss';
import { withRouter } from 'react-router';



class AppsignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onChangeHandler(type, event) {
    this.setState({ [type + 'Empty']: event.target.value !== '' })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        login(values).then(res=>{
          notification['success']({ message: '登录成功' })
          const { history } = this.props;
          setTimeout(() => {
            history.push('/');
          }, 500);

        }).catch(e=>{

        })

      }
    })
  }


  render() {

    const { getFieldDecorator } = this.props.form;

    return (
      <section className="section-form">
        <h1 className="header">
          <span className="instagram">
          </span>
        </h1>
        <Form className="sign-form" onSubmit={this.handleSubmit.bind(this)}>
          <Form.Item>
            {
              getFieldDecorator('email', { rules: [{ required: true, message: '请输入您的邮箱' }] })(
                <div className={`form-input ${this.state.emailEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'email')}>
                  <Input placeholder="邮箱" allowClear={true} id="label-phone" type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                </div>
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', { rules: [{ required: true, message: '请输入您的密码!' }] })(
                <div className={`form-input ${this.state.passwordEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'password')}>
                  <Input placeholder="密码" allowClear={true} id="label-lock" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                </div>
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">登录</Button>
          </Form.Item>
        </Form>
      </section>
    )
  }
}

const AppLoginForm = Form.create()(AppsignIn);

export default AppLoginForm
