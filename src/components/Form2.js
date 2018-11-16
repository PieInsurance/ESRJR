import React, {Component} from "react";
import {Row, Col, Input, Button, Icon} from "antd";
import {postUser2} from "../api";
import "antd/dist/antd.css";
import "../styles/Form2.css";

class Form2 extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      error: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {firstName, lastName} = this.state;
    if (firstName === "" || lastName === "") {
      return this.setState({error: "Fill out all the fields!"})
    }
    postUser2({firstName, lastName}).then(res => {
      if (res.status === 200) {
        this.props.history.push("/confirmed")
      }
      //if no success code here
    }).catch(function(error) {
      console.log(error, "Error");
    });
    this.refs.form.reset();
  }

  render() {
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
        <form className="form" ref="form">
          <div className="form-group">
            <h3>{this.props.title}</h3>
            {
              this.state.error !== "" && <p style={{
                    color: "red",
                    margin: 0
                  }}>{this.state.error}</p>
            }
            <Input className="form-input" onChange={this.handleChange} size="large" name="firstName" placeholder="First Name"/>
            <label className="form-label">First Name</label>
          </div>

          <div className="form-group">
            <Input className="form-input" onChange={this.handleChange} size="large" name="lastName" placeholder="Last Name"/>
            <label className="form-label">Last Name</label>
          </div>

          <div className="btn-group">
            <Button type="primary" href="/confirmed" onClick={this.handleSubmit}>Send
              <Icon type="rocket"></Icon>
            </Button>
            <Button type="secondary" href="/">Cancel
            </Button>
          </div>
        </form>
      </Col>
    </Row>)
  }
}

export default(Form2);
