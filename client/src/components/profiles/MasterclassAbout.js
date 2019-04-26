import React, { Component } from "react";

export default class MasterclassAbout extends Component {
  render() {
    const { profile } = this.props;
    const name = profile.name;
    const requests = profile.requests.map((request, index) => (
       <div key={index} className="p-3">
        <i className="fa fa-check" /> id :{request._id}
        <br></br>
         <i className="fa fa-check" /> status: {request.status}
         <br></br>
         <i className="fa fa-check" /> date: {request.date}
         <br></br>
         <i className="fa fa-check" /> member: {request.member}
       </div>
    ));
    // const interests = profile.interests.map((interest, index) => (
    //   <div key={index} className="p-3">
    //     <i className="fa fa-check" /> {interest}
    //   </div>
    // ));
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{name}</h3>
            <p className="lead">
              <span>date: {profile.date} - </span>
              <br></br>
              <span>description: {profile.description}</span>
            </p>
            <hr />
            <h3 className="text-center text-info">Requests</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
              {requests}
              </div>
            </div>
            <hr />
            </div>
          </div>
        </div>
    );
  }
}
