import React from "react";

const Newsitem =(props)=> {
 
    let { title, description, imgUrl, newsUrl, auther, date, source } =
      props;
    return (
      <div className="my-5 bg d-flex justify-content-center">
        <div className="card m-3">
          <img
            src={imgUrl}
            className="card-img-top card-deck"
            alt="Check your internet connection"
          />
          <div className="card-body text-light bg-dark">
            <span class="badge text-bg-danger">{source}</span>
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small className="text-white bg-dark">
                By {auther ?auther:"unknown"} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
