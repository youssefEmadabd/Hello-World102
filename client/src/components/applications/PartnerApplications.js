import React, { Component } from "react";
import { getPartnerApplications } from "../../actions/applicationActions";
import Spinner from "../common/Spinner";
import PartnerAplicationItem from "../applications/PartnerApplicationItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PartnerApplications extends Component {
  componentDidMount() {
    this.props.getPartnerApplications();
  }
  render() {
    const { applications } = this.props.application;
    let applicationItems;

    if (applications == null) {
      applicationItems = <Spinner />;
    } else {
      if (applications.length > 0) {
        applicationItems = applications.map(app => (
          <PartnerAplicationItem key={app._id} application={app} />
        ));
      } else {
        applicationItems = <h4>No Applications found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Applications</h1>
              <p className="lead text-center">
                View and Negotiate with Partners Over Applications
              </p>
              {applicationItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PartnerApplications.propTypes = {
  getPartnerApplications: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  application: state.application
});

export default connect(
  mapStateToProps,
  { getPartnerApplications }
)(PartnerApplications);
