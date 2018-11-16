import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "./components/App";
import ConfirmationPage from './components/ConfirmationPage';
import Form from './components/Form';
import Form2 from './components/Form2';

export default(<Switch>
  <Route exact="exact" path={"/"} component={App}/>
  <Route path={"/confirmed"} component={ConfirmationPage}/>
  <Route path={"/form1"} render={(props) => <Form {...props} title="Form 1"/>}/>
  <Route path={"/form2"} render={(props) => <Form2 {...props} title="Form 2"/>}/>
</Switch>);
