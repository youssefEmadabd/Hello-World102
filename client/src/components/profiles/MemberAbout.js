import React, { Component } from "react";

export default class MemberAbout extends Component {
  render() {
    const { profile } = this.props;
    const name = profile.name;
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {skill}
      </div>
    ));
    const interests = profile.interests.map((interest, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {interest}
      </div>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{name}'s Bio</h3>
            <p className="lead">
              <strong>age: </strong>
              <span>{profile.age}</span>
              <br />
              <strong>phone: </strong>
              <span>{profile.phone}</span>
            </p>
            <hr />
            <h3 className="text-center text-info">Skills</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
            <hr />
            <h3 className="text-center text-info">Interests</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {interests}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
