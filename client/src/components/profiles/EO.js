import React, { Component } from "react";
import { getEO } from "../../actions/EOActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EOHeader from "./EOHeader";
import Spinner from "../common/Spinner";
import EOCred from "./EOCred";
import EOAbout from "./EOAbout";

class EO extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMember(id);
  }
  render() {
    const { profile } = this.props;
    let profileContent;

    if (profile === null) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <EOHeader profile={profile} />
          <EOAbout profile={profile} />
          <EOCred profile={profile} />
        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

EO.propTypes = {
  getEO: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.EO.profile
});

export default connect(
  mapStateToProps,
  { getEO }
)(EO);
