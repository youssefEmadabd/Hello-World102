import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { partnerNegotiate } from "../../actions/applicationActions";

class PartnerNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
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
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const { application } = this.props.application;
    const id = application._id;

    const msgData = {
      text: this.state.text
    };
    this.props.partnerNegotiate(msgData, id, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Negotiate</h1>
              <p className="lead text-center">Write Message to admins</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Message"
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={
                    errors.error == '"text" is not allowed to be empty'
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

PartnerNegotiation.propTypes = {
  application: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  application: state.application,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { partnerNegotiate }
)(withRouter(PartnerNegotiation));
