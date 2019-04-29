import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { addpastevents, getCurrentMember } from "../../actions/memberActions";

class AddPastEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
         title:"",
        description:"",
        location:"",
        //errors: {}
   };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentMember();
    // console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  

  onSubmit(e) {
    e.preventDefault();
    const memberData = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
    };

   this.props.addpastevents(memberData, this.props.history);
  };

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
              <h1 className="display-4 text-center">Add past event</h1>
              <p className="lead text-center">
                fill in the Info about your event
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                //   error={
                //     errors.error == '"name" is required'
                //       ? errors.error
                //       : errors.error == '"name" is not allowed to be empty'
                //       ? errors.error
                //       : errors.error ==
                //         '"name" length must be at least 3 characters long'
                //       ? errors.error
                //       : null
                //   }
                />
                <TextFieldGroup
                  placeholder="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                //   error={
                //     errors.error == '"age" must be a number'
                //       ? errors.error
                //       : null
                //   }
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                //   error={
                //     errors.error == '"phone" must be a number'
                //       ? errors.error
                //       : null
                //   }
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

AddPastEvents.propTypes = {
  addpastevents: PropTypes.func.isRequired,
  getCurrentMember: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.member,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addpastevents, getCurrentMember }
)(withRouter(AddPastEvents));
