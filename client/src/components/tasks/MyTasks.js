import React, { Component } from "react";
import { getMyTasks } from "../../actions/taskActions";
import Spinner from "../common/Spinner";
import TaskItem from "../tasks/TaskItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MyTasks extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMyTasks(id);
  }
  render() {
    const { tasks } = this.props.task;
    let taskItems;

    if (tasks == null) {
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
              <h1 className="display-4 text-center">My Tasks</h1>
              <p className="lead text-center">
                Check Task Progress and Negotiate With Partners
              </p>
              {taskItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyTasks.propTypes = {
  getMyTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(
  mapStateToProps,
  { getMyTasks }
)(MyTasks);
