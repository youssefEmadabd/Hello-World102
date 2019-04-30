import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPartnerApplication } from "../../actions/applicationActions";
import Spinner from "../common/Spinner";

class PartnerApplication extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPartnerApplication(id);
  }
  render() {
    let applicationContent;
    const { application } = this.props;

    if (application == null) {
      applicationContent = <Spinner />;
    } else {
      const {
        partner,
        description,
        messages,
        needConsultancy,
        reviewed
      } = application;

      const msgs = messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.name}: </strong>
          <span>{msg.text} </span>
          <br />
        </div>
      ));

      applicationContent = (
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">Details</h3>
              <p className="lead">
                <i className="fa fa-check" /> <strong>Partner name: </strong>
                <span>{partner.organization.name} </span>
                <br />
                <i className="fa fa-check" /> <strong>Partner Phone: </strong>
                <span>{partner.organization.phone} </span>
                <br />
                <i className="fa fa-check" /> <strong>Partner Email: </strong>
                <span>{partner.organization.email} </span>
                <br />
                <i className="fa fa-check" /> <strong>Partner Address: </strong>
                <span>{partner.organization.address} </span>
                <br />
                <i className="fa fa-check" />{" "}
                <strong>Needs Consultancy: </strong>
                <span>{needConsultancy ? "Yes" : "No"} </span>
                <br />
                <i className="fa fa-check" /> <strong>Reviewed: </strong>
                <span>{reviewed ? "Yes" : "No"} </span>
                <br />
              </p>
              <hr />
              <h3 className="text-center text-info">Description</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {description}
                </div>
              </div>
              <hr />
              <h3 className="text-center text-info">Negotiation</h3>
              <div>
                <div>{msgs}</div>
              </div>
              <Link
                to={`/api/applications/partner/negotiate/${application._id}`}
                className="btn btn-lg btn-info"
              >
                Negotiate
              </Link> 
                
              
              <hr />
              <h3 className="text-center text-info">Create a Task</h3>
              <Link
                to={`/api/tasks/partner/${application._id}`}
                className="btn btn-lg btn-info"
              >
                Create a Task
              </Link>
            </div> 
          </div>
        </div>
      );
    }
    return <div>{applicationContent}</div>;
  }
}

PartnerApplication.propTypes = {
  getPartnerApplication: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  application: state.application.application
});

export default connect(
  mapStateToProps,
  { getPartnerApplication }
)(PartnerApplication);
