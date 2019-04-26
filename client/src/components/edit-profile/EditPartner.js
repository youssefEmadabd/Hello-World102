import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { editPartner, getCurrentPartner } from "../../actions/partnerActions";

class EditPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      fieldOfWork:""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentPartner();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.parnter) {
      const profile = nextProps.parnter;
        profile.fieldOfWork = profile.fieldOfWork !== null ? profile.fieldOfWork: "";
      this.setState({
       fieldOfWork: profile.fieldOfWork
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const partnerData = {
      fieldOfWork: this.state.fieldOfWork};
    if (partnerData.name == "") {
      delete partnerData.fieldOfWork;
    }
    this.props.editPartner(partnerData, this.props.history);
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
              <h1 className="display-4 text-center">Edit parnter Profile</h1>
              <p className="lead text-center">
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="fieldOfWork"
                  name="field of work"
                  value={this.state.fieldOfWork}
                  onChange={this.onChange}
                  error={
                    errors.error == '"fieldOfWork" is required'
                      ? errors.error
                      : errors.error == '"fieldOfWork" is not allowed to be empty'
                      ? errors.error
                      : errors.error ==
                        '"fieldOfWork" length must be at least 3 characters long'
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

EditPartner.propTypes = {
  editPartner: PropTypes.func.isRequired,
  getCurrentPartner: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.parnter,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { editPartner, getCurrentPartner }
)(withRouter(EditPartner));
