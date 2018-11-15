import React, {Component} from "react";
import {Input, Button, Icon} from "antd";
import { withRouter } from "react-router";
// import {Link} from "react-router-dom";
// import ConfirmationPage from "./ConfirmationPage";
import "antd/dist/antd.css";
import "./Form2.css";

class Form2 extends Component {
  constructor(){
    super()
    this.state={
      firstName: "",
      lastName: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log(this.state, "State")
    fetch('https://pie-requestbin.herokuapp.com/149ndv51',
    {method: "post", body: JSON.stringify(this.state)}
    )
    .then(res => {
      console.log(res, 'Response');
      if(res.status === 200){
        this.props.history.push("/confirmed")
      }
    })
    .catch(function (error) {
      console.log(error, "Error");
    });
    this.refs.form.reset();
  }

  render(){
    console.log(this.props, 'Props');
    return(
      <form className="form" ref="form">
        <div className="form-group">
          <h3>{this.props.title}</h3>
          <Input
            className="form-input"
            onChange={this.handleChange}
            size="large"
            name="firstName"
            placeholder="First Name"
          />
          <label className="form-label">First Name</label>
        </div>

        <div className="form-group">
          <Input
            className="form-input"
            onChange={this.handleChange}
            size="large"
            name="lastName"
            placeholder="Last Name"
          />
          <label className="form-label">Last Name</label>
        </div>

        <div className="form-group">
          <Button
            type="primary"
            href={"./confirmed"}
            onClick={this.handleSubmit}
            >Send
            <Icon type="rocket"></Icon>
          </Button>
        </div>
      </form>
    )
  }
}

export default withRouter(Form2);
