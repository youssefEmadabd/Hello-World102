import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAdminApplication } from "../../actions/applicationActions";
import Spinner from "../common/Spinner";
import {reviewapp } from "../../actions/applicationActions";
class AdminApplication extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getAdminApplication(id);
    this.onSubmit = this.onSubmit.bind(this);
    this.props.reviewapp();
  }
  onSubmit(e){
    e.preventDefault();
    this.props.reviewapp(this.props.history,this.props.match.params.id);
  }
  render() {
    let applicationContent;
    const { application } = this.props;
    if (this.props.application == null) {
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
                <form onSubmit={this.onSubmit}>
                <input
                  type="submit"
                  value="Approve"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{applicationContent}</div>;
  }
}

AdminApplication.propTypes = {
  getAdminApplication: PropTypes.func.isRequired,
  reviewapp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  application: state.application

});

export default connect(
  mapStateToProps,
  { getAdminApplication,reviewapp }
)(AdminApplication);
