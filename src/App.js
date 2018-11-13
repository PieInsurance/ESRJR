import React, { Component } from "react";
import "./App.css";
import { Col, Row } from "antd";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <main>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
          <Row type="flex" justify="center">
            <h3>Welcome to the Pie coding exercise.</h3>
            <div className="body-copy">
              <p>
                {"This project is bootstrapped with "}
                <a href="https://github.com/facebook/create-react-app">
                  Create React App
                </a>
                {" and includes "}
                <a href="https://ant.design/docs/react/introduce">Ant Design</a>
                {", a component library."}
              </p>
              <p>
                {
                  "Using Ant Design please create a form with two inputs, \
              one for first name and one for last name, and a button. \
              Clicking the button should send the form data to an API endpoint \
              and change the application to a page confirming that the data was submitted. \
              You can use the "
                }
                <a href="https://pie-requestbin.herokuapp.com/">
                  Pie RequestBin
                </a>
                {" or a bin of your choice to capture the requests."}
              </p>
              <p>
                {
                  "Please install any packages you find necessary and use your own best judgement \
                for how to lay out the components and application to achieve the necessary result."
                }
              </p>
            </div>
          </Row>
        </Col>
      </main>
    );
  }
}

export default App;
