import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon"; 
import { PartnerPostTask } from "../../actions/taskActions"
import { ConsultantPostTask } from "../../actions/taskActions"


 class Taskforum extends Component {
    constructor(props) {
        super(props);
        this.state = {
        appid:"",
        levelOfCommitment: "",
        monetaryCompensation:"",
        experienceLevel:"",
        skills:"",
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
        
       console.log(this.props)
       
       const { application } = this.props.application;
       const appid = application._id;

        const taskData = {
         levelOfCommitment : this.state.levelOfCommitment,
         monetaryCompensation : this.state.monetaryCompensation,
         experienceLevel : this.state.experienceLevel,
         skills: this.state.skills
         };
         try{
         const { consultant } = this.props.consultant.profile;
         this.props.ConsultantPostTask(taskData,appid,this.props.history);
         }catch{
        this.props.PartnerPostTask(taskData,appid,this.props.history);
        }
    
    
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
                  placeholder="* levelOfCommitment"
                  name="levelOfCommitment"
                  value={this.state.levelOfCommitment}
                  onChange={this.onChange}
                  error={
                    errors.error == '"levelOfCommitment" is not allowed to be empty'
                     ? errors.error
                     : errors.error == '"levelOfCommitment" must be a number'
                     ? errors.error
                     : null
                  }
                />
                <TextFieldGroup
                  placeholder="* monetaryCompensation"
                  name="monetaryCompensation"
                  value={this.state.monetaryCompensation}
                  onChange={this.onChange}
                  error={
                    errors.error == '"monetaryCompensation" is not allowed to be empty'
                     ? errors.error
                     : errors.error == '"monetaryCompensation" must be a number'
                     ? errors.error
                     : null
                  }
                />
                <TextFieldGroup
                  placeholder="* experienceLevel"
                  name="experienceLevel"
                  value={this.state.experienceLevel}
                  onChange={this.onChange}
                  error={
                    errors.error == '"experienceLevel" is not allowed to be empty'
                      ? errors.error
                      : errors.error == '"experienceLevel" must be a number'
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
Taskforum.propTypes = {
  application: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
    };
  
  const mapStateToProps = state => ({
    consultant: state.consultant,
    Partner: state.partner,
    application: state.application,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { PartnerPostTask  }
  )(withRouter(Taskforum));
