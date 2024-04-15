import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let {title, description,imgUrl,newsUrl}=this.props; 
    return (
      <div className="my-5 bg d-flex justify-content-center">
        <div  className="card m-3">
          <img src={imgUrl}  className="card-img-top card-deck" alt="Check your internet connection" /> 
          <div  className="card-body text-light bg-dark">
            <h5  className="card-title">{title}</h5>
            <p  className="card-text">
             {description}
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
