import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from "./App";
import ConfirmationPage from './ConfirmationPage'
import Form from './Form'
import Form2 from './Form2'

export default(
  <Switch>
    <Route exact path={"/"} component={App} />
    <Route path={"/confirmed"} component={ConfirmationPage} />
    <Route path={"/form1"} component={Form} />
    <Route path={"/form2"} component={Form2} />
  </Switch>
);
