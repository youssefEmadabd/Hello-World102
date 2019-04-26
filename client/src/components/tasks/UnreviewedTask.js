import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getAdminTask } from "../../actions/taskActions";
import Spinner from "../common/Spinner";
import Tasks from "./Tasks";


class UnreviewedTask extends Component {
  componentDidMount() {
    const { taskID,appID } = this.props.match.params;
    this.props.getAdminTask(taskID,appID);
  }

  render() {
    const { task, profile } = this.props;
    let taskContent;

    if (task == null) {
      taskContent = <Spinner />;
    } else {
      const {
        application,
        levelOfCommitment,
        experienceLevel,
        skills,
        monetaryCompensation,
        reviewed,
        applicants,
        extra
      } = task;
      const theSkills = skills.map((skill, index) => (
        <div key={index} className="p-3">
          <i className="fa fa-check" /> {skill}
        </div>
      ));
      const exs = extra.map((x, index) => (
        <div key={index} className="p-3">
          <i className="fa fa-check" /> {x}
        </div>
      ));

      taskContent = (
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">Details</h3>
              <p className="lead">
                <i className="fa fa-check" />{" "}
                <strong>Level Of Commitment: </strong>
                <span>{levelOfCommitment} </span>
                <br />
                <i className="fa fa-check" />{" "}
                <strong>Monetary Compensation: </strong>
                <span>{monetaryCompensation} </span>
                <br />
                <i className="fa fa-check" />{" "}
                <strong>Experience Level: </strong>
                <span>{experienceLevel} </span>
                <br />
                <i className="fa fa-check" /> <strong>Reviewed: </strong>
                <span>{reviewed ? "Yes" : "No"} </span>
                <br />
              </p>
              <hr />
              <h3 className="text-center text-info">Skills</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {theSkills}
                </div>
              </div>
              <hr />
              <h3 className="text-center text-info">Extra Attributes</h3>
              <div className="row">
              
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {exs}
                </div>
              </div>
              <hr />
            </div>
          </div>
          
         
            <Link to={`/api/applications/admin/${application._id}`} className="btn btn-info">
              review Task
            </Link>
            
          
        </div>
      );
    }
    return <div>{taskContent}</div>;
  }
}

UnreviewedTask.propTypes = {
  getAdminTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task.task,
  profile: state.member.profile
});

export default connect(
  mapStateToProps,
  { getAdminTask }
)(UnreviewedTask);
