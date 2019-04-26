import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class AppItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profile.description}</h3>
            <p>
              <span>{profile.needConsultancy}</span>
            </p>
            <Link
              to={`/api/applications/admin/${profile._id}/:appID`}
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

AppItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default AppItem;
