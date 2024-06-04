import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loaderf.js";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 18,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
  };
  capitalizeFirstLetter = (s) =>
    s
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(props.category)} News`;
  }
  async updateapi(pageno) {
    this.props.setProgress(20);
    this.setState({ loading: true, articles: [] });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${pageno}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();

    this.props.setProgress(70);
    this.setState({
      page: pageno,
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateapi(this.state.page);
  }
  handlePreviousClick = async () => {
    this.updateapi(this.state.page - 1);
  };

  handleNextClick = async () => {
    this.updateapi(this.state.page + 1);
  };
  render() {
    return (
      <div className="container my-3 ">
        <h2 className="text-center">
          News - Top Headlines -{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        <h6 className="text-center">Page: {this.state.page}</h6>
        {this.state.loading && <Loader />}
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
                  auther={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
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
