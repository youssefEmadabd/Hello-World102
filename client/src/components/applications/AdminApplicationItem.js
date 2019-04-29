import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class AdminApplicationItem extends Component {
  render() {
    const { application } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            
            <p>
              <span>{application.partner.organization.email}</span>
            </p>
            <p>
              <span>{application.partner.organization.phone}</span>
            </p>
            <Link
              to={`/api/applications/admin/${application._id}`}
              className="btn btn-info"
            >
              View Application
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

AdminApplicationItem.propTypes = {
  application: PropTypes.object.isRequired
};

export default AdminApplicationItem;