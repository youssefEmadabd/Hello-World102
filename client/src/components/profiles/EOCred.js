import React, { Component } from "react";
import Moment from "react-moment";

export default class PartnerCred extends Component {
  render() {
    const {
      trainers,
      courses,
      certificates
    } = this.props.profile;

    const trainers = trainers.map(e => (
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
          {e.name === "" ? null : (
            <span>
              <strong>name: </strong> {e.name}
            </span>
          )}
        </p>
      </li>
    ));

    const courses = courses.map(e => (
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
          {e.name === "" ? null : (
            <span>
              <strong>name: </strong> {e.name}
            </span>
          )}
        </p>
      </li>
    ));
    const certificates = certificates.map(e => (
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
          {e.name === "" ? null : (
            <span>
              <strong>name: </strong> {e.name}
            </span>
          )}
        </p>
      </li>
    ));
    
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-info">trainers</h3>
            {events.length > 0 ? (
              <ul className="list-group">{trainers}</ul>
            ) : (
              <p className="text-center">No trainers Listed</p>
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
              <ul className="list-group">{feedbk}</ul>
            ) : (
              <p className="text-center">No Certificates Listed</p>
            )}
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
