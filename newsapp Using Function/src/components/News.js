import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem.js";
import Loader from "./Loaderf.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (str) => {
    const modStr = str[0].toUpperCase() + str.slice(1);
      return modStr
    
  };
  
  console.log(capitalizeFirstLetter("aman"));
  const updateapi = async () => {
    setArticles([]);
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  };
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} News`;
    updateapi();
    // eslint-disable-next-line
  }, []);
  // const handlePreviousClick = async () => {
  //   setPage(page - 1);
  //   updateapi();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateapi();
  // };
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };
  return (
    <>
      <h2 className="text-center pt-5 mt-5">
        News - Top Headlines - {capitalizeFirstLetter(props.category)}
      </h2>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pagesize: 18,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string,
};

export default News;
