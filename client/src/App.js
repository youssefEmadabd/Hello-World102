import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Member from "./components/profiles/Member";
import Partner from "./components/profiles/Partner";
import Masterclass from "./components/profiles/Masterclass";
import Consultant from "./components/profiles/Consultant";
import Application from "./components/applications/Application";
import Task from "./components/tasks/Task";
import Members from "./components/members/Members";
import CreateMember from "./components/create-profile/CreateMember";
import EditMember from "./components/edit-profile/EditMember";
import addSkiils from "./components/member-add-skils/addSkiils";
import dashboard from "./components/dashboard/dashboard";
import PrivateRoute from "./components/common/PrivateRoute";
import CreatePartner from "./components/create-profile/CreatePartner";
import CreateOrganization from "./components/create-profile/CreateOrganization";
import EditPartner from "./components/edit-profile/EditPartner";
import partnerAppSubmit from "./components/submittions/partnerAppSubmit";

import Tasks from "./components/tasks/Tasks";
import MemberNegotiate from "./components/negotiation/MemberNegotiate";
import MyTasks from "./components/tasks/MyTasks";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/api/profiles/members/all"
                component={Members}
              />
              <Route exact path="/api/profiles/member/:id" component={Member} />
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/create-member"
                  component={CreateMember}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/cp/:id" component={CreatePartner} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/create-organization"
                  component={CreateOrganization}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/Post-application"
                  component={partnerAppSubmit}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/addSkils"
                  component={addSkiils}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/edit-member"
                  component={EditMember}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/edit-Partner"
                  component={EditPartner}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/dashboard" component={dashboard} />
              </Switch>
              <Route
                exact
                path="/api/masterclasses/all/:id"
                component={Masterclass}
              />
              <Route
                exact
                path="/api/profiles/partner/:id"
                component={Partner}
              />
              <Route
                exact
                path="/api/profiles/consultant/:id"
                component={Consultant}
              />
              <Route
                exact
                path="/api/applications/admin/:id/:appID"
                component={Application}
              />
              <Route
                exact
                path="/api/applications/consultant/:id/:appID"
                component={Application}
              />
              <Route
                exact
                path="/api/tasks/admin/:id/:taskID"
                component={Task}
              />
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/member/:taskID"
                  component={Task}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/api/tasks" component={Tasks} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/member/mytasks/:id"
                  component={MyTasks}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/member/negotiate/:id/:id2"
                  component={MemberNegotiate}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
