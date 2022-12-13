import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner my-5">
        <div className="card text-center p-md-5 bg-light border-0">
          <div className="card-body">
            <h2 className="card-title display-md-4 font-weight-bold">
              A warm welcome!
            </h2>
            <p className="card-text" style={{ fontSize: 24 }}>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a href="#" className="btn btn-primary btn-lg">
              Call to action
            </a>
          </div>
        </div>
      </div>
    );
  }
}
