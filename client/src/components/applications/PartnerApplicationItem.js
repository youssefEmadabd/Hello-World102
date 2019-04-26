import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PartnerApplicationItem extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{application.partner.organization.name}</h3>
            <p>
              <span>{application.description}</span>
            </p>
            <Link
              to={`/api/applications/partner/${application._id}`}
              className="btn btn-info"
            >
              View Application
            </Link>
            <Link
              to={`/api/applications/editapp/${application._id}`}
              className="btn btn-info"
            >
              Edit Application
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

PartnerApplicationItem.propTypes = {
  application: PropTypes.object.isRequired
};

export default PartnerApplicationItem;
