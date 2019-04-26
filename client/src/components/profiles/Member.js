import React, { Component } from "react";
import { getMember } from "../../actions/memberActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MemberHeader from "./MemberHeader";
import Spinner from "../common/Spinner";
import MemberCred from "./MemberCred";
import MemberAbout from "./MemberAbout";

class Member extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMember(id);
  }
  render() {
    const { profile } = this.props;
    let profileContent;

    if (profile == null || Object.keys(profile) == 0) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <MemberHeader profile={profile} />
          <MemberAbout profile={profile} />
          <MemberCred profile={profile} />
        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

Member.propTypes = {
  getMember: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.member.profile
});

export default connect(
  mapStateToProps,
  { getMember }
)(Member);
