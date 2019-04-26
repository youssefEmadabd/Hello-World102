import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { postApplication } from "../../actions/applicationActions";

class parnterAppSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      needConsultancy: false,
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

    const ApplicationData = {
      description: this.state.description,
      needConsultancy: false
    };

    this.props.postApplication(ApplicationData, this.props.history);
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
              <h1 className="display-4 text-center">Create Application</h1>
              <p className="lead text-center">please fill all</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="*desc"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={
                    errors.error == '"description" is required'
                      ? errors.error
                      : errors.error ==
                        '"description" is not allowed to be empty'
                      ? errors.error
                      : errors.error ==
                        '"description" length must be at least 3 characters long'
                      ? errors.error
                      : null
                  }
                />
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="1"
                    value={this.state.needConsultancy}
                    onChange={this.onChange}
                  >
                    <label class="custom-control-label" for="defaultUnchecked">
                      Need needConsultancy?:
                    </label>
                  </input>
                </div>
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

parnterAppSubmit.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.parnter,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { postApplication }
)(withRouter(parnterAppSubmit));
