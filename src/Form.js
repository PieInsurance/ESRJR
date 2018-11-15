import React, {Component} from "react";
import { Form, Input, Button } from 'antd';
import postUser from './api';
import "antd/dist/antd.css";
import "./App.css";

const FormItem = Form.Item;

class Form1 extends Component {

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
      <Form
        onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('firstName', {
              rules: [{ required: true, message: 'Please input your First Name!' }],
            })(
              <div className="form-group">
                <h3>{this.props.title}</h3>
                <Input
                  type="text"
                  placeholder="First Name"
                />
              </div>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'Please input your Last Name!' }],
            })(
              <div className="form-group">
                <Input
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            )}
          </FormItem>
          <FormItem>
            <div className="form-group">
              <Button
                type="primary"
                htmlType="submit" className="login-form-button">
                Send
              </Button>
            </div>
          </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Form1);

export default WrappedNormalLoginForm;
