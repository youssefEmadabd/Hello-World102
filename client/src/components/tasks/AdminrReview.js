import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon"; 
import { reviewApplications } from "../../actions/adminActions"
import { getApplication } from "../../actions/applicationActions";
import store from '../../store';

 class AdminReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        reviewed:"",
        date: "",
        messages:"",
        description:"",
        needConsultancy:"",
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
     
        const appdata = {
            date : this.state.date,
            description : this.state.description,
            needConsultancy : this.state.needConsultancy,
            messages: this.state.messages
         };
         console.log(this.state.appid)
        this.props.reviewApplications(appdata,this.state.appid,this.props.history);
    }
    onChange(e) {
         this.setState({ [e.target.name]: e.target.value });
          }
    

  render() {
    const { errors } = this.state;
    return (
       
        <div className="create-task">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create task </h1>
              <p className="lead text-center">tell us about the task</p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>

              <TextFieldGroup
                  placeholder="* appid"
                  name="appid"
                  value={this.state.appid}
                  onChange={this.onChange}
                  // error={
                  //   errors.error == '"age" must be a number'
                  //     ? errors.error
                  //     : null
                  // }
                />

                <TextFieldGroup
                  placeholder="* date"
                  name="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  // error={
                  //   errors.error == '"age" must be a number'
                  //     ? errors.error
                  //     : null
                  // }
                />
                <TextFieldGroup
                  placeholder="* messages"
                  name="messages"
                  value={this.state.messages}
                  onChange={this.onChange}
                  // error={
                  //   errors.error == '"phone" must be a number'
                  //     ? errors.error
                  //     : null
                  // }
                />
                <TextFieldGroup
                  placeholder="* description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  // error={
                  //   errors.error == '"email" is not allowed to be empty'
                  //     ? errors.error
                  //     : errors.error == '"email" must be a valid email'
                  //     ? errors.error
                  //     : null
                  // }
                />
                <TextFieldGroup
                  placeholder="* needConsultancy"
                  name="needConsultancy"
                  value={this.state.needConsultancy}
                  onChange={this.onChange}
                  // error={
                  //   errors.error == '"skills" is not allowed to be empty'
                  //     ? errors.error
                  //     : null
                  // }
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP)"
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
    )
  }
}
reviewApplications.propTypes = {
    task: PropTypes.object.isRequired
    };
  
  const mapStateToProps = state => ({
    task: state.task
  });
  
  export default connect(
    mapStateToProps,
    { reviewApplications , getApplication }
  )(withRouter(reviewApplications));
