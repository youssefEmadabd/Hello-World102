import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextFieldGroupIcon from "../common/TextFieldGroupIcon";
import { addSkillMember, getCurrentMember } from "../../actions/memberActions";

class addSkiils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentMember();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.member) {
      const profile = nextProps.member;

      const skillsCSV = profile.skills.join(",");

      this.setState({
      
        skills: skillsCSV,
        
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const memberData = {
      
      skills: this.state.skills,
      
    };
    
    if (memberData.skills == "") {
      delete memberData.skills;
    }
    

    this.props.addSkillMember(memberData, this.props.history);
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
              <h1 className="display-4 text-center">add skill</h1>
              <p className="lead text-center">
               
              </p>
              <form onSubmit={this.onSubmit}>
               
                
                
                <TextFieldGroup
                  placeholder="Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={
                    errors.error == '"skills" is not allowed to be empty'
                      ? errors.error
                      : null
                  }
                  info="Please use comma separated values to add more skills to your profile (eg.
                    HTML,CSS,JavaScript,PHP)"
                />
                
                
                <div>
                  
                  
                  

                  
                  
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

addSkiils.propTypes = {
 addSkillMember: PropTypes.func.isRequired,
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
  { addSkillMember, getCurrentMember }
)(withRouter(addSkiils));
