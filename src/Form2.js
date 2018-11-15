import React, {Component} from "react";
import { Form, Icon, Input, Button } from 'antd';
import postUser from './api';
import "antd/dist/antd.css";
import "./App.css";

const FormItem = Form.Item;

class Form2 extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        postUser(values)
        .then(response => {
         if (response.success) {
          console.log(values, "Success");;
         }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form form">
        <FormItem>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your First Name!' }],
          })(
            <Input placeholder="First Name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your Last Name!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Last Name" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Send
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Form2);

export default WrappedNormalLoginForm;
