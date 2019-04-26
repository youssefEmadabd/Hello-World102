import React, { Component } from "react";

export default class consultantHeader extends Component {
  render() {
    const { organization } = this.props.profile;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={organization.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center">{organization.name}</h1>
              <p className="lead text-center">{organization.email}</p>
              <p>
                {organization.social == null ? null : organization.social
                    .twitter == null ? null : (
                  <a
                    className="text-white p-2"
                    href={organization.social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                )}{" "}
                {organization.social == null ? null : organization.social
                    .facebook == null ? null : (
                  <a
                    className="text-white p-2"
                    href={organization.social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook fa-2x" />
                  </a>
                )}{" "}
                {organization.social == null ? null : organization.social
                    .linkedin == null ? null : (
                  <a
                    className="text-white p-2"
                    href={organization.social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                )}{" "}
                {organization.social == null ? null : organization.social
                    .youtube == null ? null : (
                  <a
                    className="text-white p-2"
                    href={organization.social.youtube}
                    target="_blank"
                  >
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                )}{" "}
                {organization.social == null ? null : organization.social
                    .instagram == null ? null : (
                  <a
                    className="text-white p-2"
                    href={organization.social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
