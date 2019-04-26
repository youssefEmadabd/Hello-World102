import React, { Component } from "react";
import Moment from "react-moment";

export default class MemberCred extends Component {
  render() {
    const {
      pastEvents,
      tasksCompleted,
      reviews,
      certificates,
      masterclasses
    } = this.props.profile;

    const events = pastEvents.map(e => (
      <li key={e._id} className="list-group-item">
        <h4 className="text-center">{e.title}</h4>
        <p>
          {e.location === "" ? null : (
            <span>
              <strong>Location: </strong> {e.location}
            </span>
          )}
        </p>
        <p>
          {e.description === "" ? null : (
            <span>
              <strong>Description: </strong> {e.description}
            </span>
          )}
        </p>
      </li>
    ));

    const tasks = tasksCompleted.map(task => (
      <li key={task._id} className="list-group-item">
        <h4 className="text-center">Task Details</h4>
        <p>
          <strong>Monetary Compensation:</strong>{" "}
          {task.task.monetaryCompensation}
        </p>
        <p>
          <strong>Experience Level:</strong> {task.task.experienceLevel}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          <Moment format="DD/MM/YYYY">{task.task.date}</Moment>
        </p>
      </li>
    ));
    const certs = certificates.map(certificate => (
      <li key={certificate._id} className="list-group-item">
        <h4 className="text-center">{certificate.title}</h4>
        <p>
          <strong>Entity:</strong> {certificate.entity}
        </p>
        <p>
          {certificate.description === "" ? null : (
            <span>
              <strong>Description: </strong> {certificate.description}
            </span>
          )}
        </p>
      </li>
    ));
    const masters = masterclasses.map(masterclass => (
      <li key={masterclass._id} className="list-group-item">
        <h4 className="text-center">{masterclass.masterclass.name}</h4>
        <p>
          {masterclass.masterclass.description === "" ? null : (
            <span>
              <strong>Description: </strong>{" "}
              {masterclass.masterclass.description}
            </span>
          )}
        </p>
      </li>
    ));
    const revs = reviews.map(review => (
      <li key={review._id} className="list-group-item">
        <h4 className="text-center">{review.partner}</h4>
        <p>
          <strong>Rating:</strong> {review.rating}
        </p>
        <p>
          {review.review === "" ? null : (
            <span>
              <strong>review: </strong> {review.review}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">Past Events</h3>
            {events.length > 0 ? (
              <ul className="list-group">{events}</ul>
            ) : (
              <p className="text-center">No Past Events Listed</p>
            )}
          </div>
          <div className="col-md-6">
            <h3 className="text-center text-info">Tasks Completed</h3>
            {tasks.length > 0 ? (
              <ul className="list-group">{tasks}</ul>
            ) : (
              <p className="text-center">No Tasks Listed</p>
            )}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">Certificates</h3>
            {certs.length > 0 ? (
              <ul className="list-group">{certs}</ul>
            ) : (
              <p className="text-center">No Certificates Listed</p>
            )}
          </div>
          <div className="col-md-6">
            <h3 className="text-center text-info">Masterclasses</h3>
            {masters.length > 0 ? (
              <ul className="list-group">{masters}</ul>
            ) : (
              <p className="text-center">No Masterclasses Listed</p>
            )}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center text-info">Reviews</h3>
            {revs.length > 0 ? (
              <ul className="list-group">{revs}</ul>
            ) : (
              <p className="text-center">No Reviews Found</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
