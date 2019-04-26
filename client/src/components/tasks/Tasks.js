import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import TaskItem from "./TaskItem";
import { getTasks } from "../../actions/taskActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const { tasks } = this.props.task;
    let taskItems;

    if (tasks === null) {
      taskItems = <Spinner />;
    } else {
      if (tasks.length > 0) {
        taskItems = tasks.map(task => <TaskItem key={task._id} task={task} />);
      } else {
        taskItems = <h4>No Tasks found...</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Available Tasks</h1>
              <p className="lead text-center">Apply for Tasks and Get Paid</p>
              {taskItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(
  mapStateToProps,
  { getTasks }
)(Tasks);
