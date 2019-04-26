import React, { Component } from "react";

export default class EOAbout extends Component {
  render() {
    const { profile } = this.props;
    const name = profile.name;
    const certificates = profile.certificates;
    const trainers = profile.trainers.map((trainers, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {trainers}
      </div>
    ));
    const courses = profile.courses.map((courses, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {courses}
      </div>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{name}'s Bio</h3>
            <p className="lead">
              <span>price: {profile.price} - </span>
              <span>description: {profile.description}</span>
            </p>
            <hr />
            <h3 className="text-center text-info">trainers</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {name}
              </div>
            </div>
            <hr />
            <h3 className="text-center text-info">courses</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
