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
import AdminReview from"./components/tasks/AdminrReview";
import Tasks from "./components/tasks/Tasks";
import MyTasks from "./components/tasks/MyTasks";
import UnreviewedTasks from "./components/tasks/UnreviewedTasks";
import UnreviewedTask from "./components/tasks/UnreviewedTask";
import AdminApplications from "./components/applications/AdminApplications";
import AdminApplication from "./components/applications/AdminApplication";
import PartnerApplications from "./components/applications/PartnerApplications";
import PartnerApplication from "./components/applications/PartnerApplication";
import PartnerNegotiation from "./components/applications/PartnerNegotiation";
import editapp from "./components/edit-profile/editapp";

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
                  path="/api/profiles/partnerAppSubmit"
                  component={partnerAppSubmit}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/applications/editapp/:id"
                  component={editapp}
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
                path="/api/applications/consultant/:id/:appID"
                component={Application}
              />
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/profiles/partner/applications/:id"
                  component={PartnerApplications}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/member/:taskID"
                  component={Task}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/admin/:taskID"
                  component={UnreviewedTask}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/api/tasks" component={Tasks} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/tasks/admin/mytasks/:id"
                  component={UnreviewedTasks}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/applications/admin/all"
                  component={AdminApplications}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="api/applications/admin/:id/:appID"
                  component={AdminReview}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/applications/admin/:id"
                  component={AdminApplication}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/applications/partner/:id"
                  component={PartnerApplication}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/api/applications/partner/negotiate/:id"
                  component={PartnerNegotiation}
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
