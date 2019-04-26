import React, { Component } from "react";
import { getUnreviewedTasks } from "../../actions/taskActions";
import Spinner from "../common/Spinner";
import UnreviewedTaskItem from "../tasks/UnreviewedTaskItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UnreviewedTasks extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUnreviewedTasks(id);
  }
  render() {
    const { tasks } = this.props.task;
    let taskItems;

    if (tasks == null) {
      taskItems = <Spinner />;
    } else {
      if (tasks.length > 0) {
        taskItems = tasks.map(task => (
          <UnreviewedTaskItem key={task._id} task={task} />
        ));
      } else {
        taskItems = <h4>No Tasks found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Unreviewed Tasks</h1>
              <p className="lead text-center">Review Unreviewed Tasks</p>
              {taskItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UnreviewedTasks.propTypes = {
  getUnreviewedTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task
});

export default connect(
  mapStateToProps,
  { getUnreviewedTasks }
)(UnreviewedTasks);
