import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
//import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import {createPartner } from "../../actions/partnerActions";

class CreatePartner extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      fieldOfWork:"",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const partnerData = {
     fieldOfWork:this.state.fieldOfWork,
    };
    
    this.props.createPartner(partnerData, this.props.history,this.props.match.params.id);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Partner</h1>
              <p className="lead text-center">Tell us more about what you do</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="*field-of-work"
                  name="fieldOfWork"
                  value={this.state.fieldOfWork}
                  onChange={this.onChange}
                  error={
                    errors.error == '"fieldOfWork" is required'
                      ? errors.error
                      : errors.error == '"fieldOfWork" is not allowed to be empty'
                      ? errors.error
                      : errors.error ==
                        '"FieldOfWork" length must be at least 3 characters long'
                      ? errors.error
                      : null
                  }
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreatePartner.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.parnter,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createPartner }
)(withRouter(CreatePartner));
