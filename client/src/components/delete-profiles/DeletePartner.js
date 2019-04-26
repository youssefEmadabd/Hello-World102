import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { deletePartner } from "../../actions/partnerActions";

class DeletePartner extends Comment {
    componentDidMount(){
        this.props.deletePartner(this.props.history);
    }
    

}

  
  export default connect(
    mapStateToProps,
    { deletePartner }
  )(withRouter(DeletePartner));