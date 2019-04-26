import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { createMember } from "../../actions/memberActions";

class CreateMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      phone: "",
      email: "",
      interests: "",
      skills: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
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

    const memberData = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      phone: this.state.phone,
      skills: this.state.skills,
      interests: this.state.interests,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    if (memberData.twitter == "") {
      delete memberData.twitter;
    }
    if (memberData.youtube == "") {
      delete memberData.youtube;
    }
    if (memberData.facebook == "") {
      delete memberData.facebook;
    }
    if (memberData.instagram == "") {
      delete memberData.instagram;
    }
    if (memberData.linkedin == "") {
      delete memberData.linkedin;
    }

    this.props.createMember(memberData, this.props.history);
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
              <h1 className="display-4 text-center">Create Member Profile</h1>
              <p className="lead text-center">Tell us more about you</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={
                    errors.error == '"name" is required'
                      ? errors.error
                      : errors.error == '"name" is not allowed to be empty'
                      ? errors.error
                      : errors.error ==
                        '"name" length must be at least 3 characters long'
                      ? errors.error
                      : null
                  }
                />
                <TextFieldGroup
                  placeholder="* Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={
                    errors.error == '"age" must be a number'
                      ? errors.error
                      : null
                  }
                />
                <TextFieldGroup
                  placeholder="* Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={
                    errors.error == '"phone" must be a number'
                      ? errors.error
                      : null
                  }
                />
                <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={
                    errors.error == '"email" is not allowed to be empty'
                      ? errors.error
                      : errors.error == '"email" must be a valid email'
                      ? errors.error
                      : null
                  }
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={
                    errors.error == '"skills" is not allowed to be empty'
                      ? errors.error
                      : null
                  }
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)"
                />
                <TextFieldGroup
                  placeholder="Interests"
                  name="interests"
                  value={this.state.interests}
                  onChange={this.onChange}
                  error={
                    errors.error == '"interests" is not allowed to be empty'
                      ? errors.error
                      : null
                  }
                  info="Please use comma separated values (eg.
                    Football,Reading,Cinema)"
                />
                <div className="mb-3">Add Social Media Links (Optional)</div>
                <div>
                  <TextFieldGroupIcon
                    placeholder="Twitter Profile URL"
                    name="twitter"
                    icon="fab fa-twitter"
                    value={this.state.twitter}
                    onChange={this.onChange}
                    error={
                      errors.error == '"twitter" is not allowed to be empty'
                        ? errors.error
                        : errors.error == '"twitter" must be a valid uri'
                        ? errors.error
                        : null
                    }
                  />

                  <TextFieldGroupIcon
                    placeholder="Facebook Profile URL"
                    name="facebook"
                    icon="fab fa-facebook"
                    value={this.state.facebook}
                    onChange={this.onChange}
                    error={
                      errors.error == '"facebook" is not allowed to be empty'
                        ? errors.error
                        : errors.error == '"facebook" must be a valid uri'
                        ? errors.error
                        : null
                    }
                  />

                  <TextFieldGroupIcon
                    placeholder="Linkedin Profile URL"
                    name="linkedin"
                    icon="fab fa-linkedin"
                    value={this.state.linkedin}
                    onChange={this.onChange}
                    error={
                      errors.error == '"linkedin" is not allowed to be empty'
                        ? errors.error
                        : errors.error == '"linkedin" must be a valid uri'
                        ? errors.error
                        : null
                    }
                  />

                  <TextFieldGroupIcon
                    placeholder="YouTube Channel URL"
                    name="youtube"
                    icon="fab fa-youtube"
                    value={this.state.youtube}
                    onChange={this.onChange}
                    error={
                      errors.error == '"youtube" is not allowed to be empty'
                        ? errors.error
                        : errors.error == '"youtube" must be a valid uri'
                        ? errors.error
                        : null
                    }
                  />

                  <TextFieldGroupIcon
                    placeholder="Instagram Profile URL"
                    name="instagram"
                    icon="fab fa-instagram"
                    value={this.state.instagram}
                    onChange={this.onChange}
                    error={
                      errors.error == '"instagram" is not allowed to be empty'
                        ? errors.error
                        : errors.error == '"instagram" must be a valid uri'
                        ? errors.error
                        : null
                    }
                  />
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

CreateMember.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.member,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createMember }
)(withRouter(CreateMember));
