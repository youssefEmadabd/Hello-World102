import React, { Component } from "react";
import { getMASTERCLASS } from "../../actions/masterclasesAction";
import { getMember } from "../../actions/memberActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MemberHeader from "./MemberHeader";
import Spinner from "../common/Spinner";
import MasterclassAbout from "./MasterclassAbout";

class Masterclass extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMASTERCLASS(id);
  }
  render() {
    const { profile } = this.props;
    let profileContent;

    if (profile === null) {
        profileContent = <Spinner />;
    } else {
        profileContent = (
        <div>
         <MasterclassAbout profile={profile} />

        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

Masterclass.propTypes = {
    getMASTERCLASS: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.master.profile
});

export default connect(
  mapStateToProps,
  { getMASTERCLASS }
)(Masterclass);
