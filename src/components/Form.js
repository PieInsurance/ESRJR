import React, {Component} from "react";
import {Row, Col, Form, Input, Button} from "antd";
import {postUser} from "../api";
import "antd/dist/antd.css";
import "../styles/App.css";

const FormItem = Form.Item;

class Form1 extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        postUser(values).then(response => {
          if (response.success) {
            console.log(response.user, "Success");
            this.props.history.push('/confirmed');
          }
          //if no success code here
        }).catch(error => {
          console.log(error, "Error");
        });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (<Row gutter={16}>
      <Col xs={{
          span: 20,
          offset: 2
        }} sm={{
          span: 16,
          offset: 4
        }} md={{
          span: 12,
          offset: 6
        }}>
        <Form onSubmit={this.handleSubmit} className="login-form form">
          <FormItem>
            {
              getFieldDecorator('firstName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your First Name!'
                  }
                ]
              })(<div className="form-group">
                <h3>{this.props.title}</h3>
                <Input type="text" placeholder="First Name"/>
              </div>)
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('lastName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Last Name!'
                  }
                ]
              })(<div className="form-group">
                <Input type="text" placeholder="Last Name"/>
              </div>)
            }
          </FormItem>
          <FormItem>
            <div className="btn-group">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Send
              </Button>
              <Button type="secondary" href="/">
                Cancel
              </Button>
            </div>
          </FormItem>
        </Form>
      </Col>
    </Row>);
  }
}

const WrappedNormalLoginForm = Form.create()(Form1);

export default WrappedNormalLoginForm;
