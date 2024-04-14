import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pagesize: 18,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=36fd84d366b94a1fb6ee775688380a8f&page=${this.state.page}&pageSize=${this.state.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    console.log("previus");
    let url = `https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=36fd84d366b94a1fb6ee775688380a8f&page=${
      this.state.page - 1
    }&pageSize=${this.state.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >Math.ceil(this.state.totalResults / this.state.pagesize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=36fd84d366b94a1fb6ee775688380a8f&page=${
        this.state.page + 1
      }&pageSize=${this.state.pagesize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-3 text-center">
        <h2>News - Top Headlines</h2>
        <h6>Page: {this.state.page}</h6>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://img.freepik.com/free-photo/business-concept-glass-world-laptop_1150-17695.jpg?size=626&ext=jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

       
        <div className="container my-2 d-flex justify-content-around alin align-items-center">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-lg btn-dark mx-2"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <h6>Page: {this.state.page}</h6>
          <button
            disabled={ this.state.page + 1 >Math.ceil(this.state.totalResults / this.state.pagesize)}
            type="button"
            className="btn btn-lg btn-dark mx-2"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
