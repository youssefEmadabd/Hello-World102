import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UnreviewedTaskItem extends Component {
  render() {
    const { task } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{task.application.partner.organization.name}</h3>
            <p>
              <span>{task.application.partner.organization.email}</span>
            </p>
            <p>
              <span>{task.application.partner.organization.phone}</span>
            </p>
            <Link to={`/api/tasks/admin/${task._id}`} className="btn btn-info">
              View Task
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skills</h4>
            <ul className="list-group">
              {task.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

UnreviewedTaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default UnreviewedTaskItem;
