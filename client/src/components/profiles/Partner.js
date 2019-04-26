import React, { Component } from "react";
import { getPartner } from "../../actions/partnerActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import PartnerHeader from "./PartnerHeader";

class Partner extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPartner(id);
  }
  render() {
    const { profile } = this.props;
    let profileContent;

    if (profile === null) {
      profileContent = <Spinner />;
    } else {
      const {
        pastProjects,
        fieldOfWork,
        organization,
        boardMembers,
        events
      } = this.props.profile;

      const boards = boardMembers.map(board => (
        <li key={board._id} className="list-group-item">
          <h4 className="text-center">{board.name}</h4>
          <p>
            {board.position === "" ? null : (
              <span>
                <strong>Position: </strong> {board.position}
              </span>
            )}
          </p>
        </li>
      ));
      const evs = events.map(e => (
        <li key={e._id} className="list-group-item">
          <h4 className="text-center">{e.title}</h4>
          <p>
            {e.description === "" ? null : (
              <span>
                <strong>Description: </strong> {e.description}
              </span>
            )}
          </p>
        </li>
      ));

      profileContent = (
        <div>
          <PartnerHeader profile={this.props.profile} />
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
                <h3 className="text-center text-info">
                  About {organization.name}
                </h3>
                <p className="lead">
                  <strong>address: </strong>
                  <span>{profile.organization.address}</span>
                  <br />
                  <strong>phone: </strong>
                  <span>{profile.organization.phone}</span>
                  <br />
                  <strong>Field Of Work: </strong>
                  <span>{fieldOfWork}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center text-info">Board Members</h3>
              {boards.length > 0 ? (
                <ul className="list-group">{boards}</ul>
              ) : (
                <p className="text-center">No Board Members Listed</p>
              )}
            </div>
            <div className="col-md-6">
              <h3 className="text-center text-info">Events</h3>
              {evs.length > 0 ? (
                <ul className="list-group">{evs}</ul>
              ) : (
                <p className="text-center">No Events Listed</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

Partner.propTypes = {
  getPartner: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.partner.profile
});

export default connect(
  mapStateToProps,
  { getPartner }
)(Partner);