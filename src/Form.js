import React, {Component} from "react";
import {Input, Button, Icon} from "antd";
import "antd/dist/antd.css";
import "./App.css";

class Form extends Component {
  constructor(){
    super()
    this.state={
      firstName: "",
      // lastName: "",
    }
    this.textInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
      this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(Object.assign({},this.state, {lastName: this.textInput.current.value} ), "State")
    // axios.post('http://localhost:5000/user', { user: this.state })
    //   .then(res => {
    //     console.log(res);
    //     window.location = '/contact'
    //   })
    //   .catch(function (error) {
    //     // window.location = '/contact'
    //     console.log(error);
    //   });
  };

  render(){
    console.log(this.textInput, "LastName");
    return(
      <form className="form">
        <div className="form-group">
          <Input
            className="form-input"
            onChange={this.handleChange}
            size="large"
            name="firstName"
            placeholder="First Name"
            required
          />
          <label className="form-label">First Name</label>
        </div>

        <div className="form-group">
          <Input
            ref={this.textInput}
            className="form-input"
            // onChange={this.handleChange}
            size="large"
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <label className="form-label">Last Name</label>
        </div>

        <div className="form-group">
          <Button
            type="primary"
            href="https://ant.design/components/button/"
            target="_blank"
            onClick={this.handleSubmit}
            >Send
            <Icon type="rocket"></Icon>
          </Button>
        </div>
      </form>
    )
  }
}

export default Form;
