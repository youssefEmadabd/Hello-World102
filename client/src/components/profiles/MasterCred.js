import React, { Component } from "react";
import Moment from "react-moment";

export default class MasterCred extends Component {
  render() {
    const {
      masterclasses
    } = this.props.profile;

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
    return (
      <React.Fragment>
        <div className="row">
          </div>
          <div className="col-md-6">
            <h3 className="text-center text-info">Masterclasses</h3>
            {masters.length > 0 ? (
              <ul className="list-group">{masters}</ul>
            ) : (
              <p className="text-center">No Masterclasses Listed</p>
            )}
          </div>
        <hr />
      </React.Fragment>
    );
  }
}
